import React from 'react'

export const useLocalStorage = (keyName, defaultValue) => {

    const [storedValue, setStoredValue] = React.useState(() => {

        try {
            const value = window.localStorage.getItem(keyName);
    
            if (value) {
                return JSON.parse(value);
            } else {
                window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
                return defaultValue;
            }
        } catch (err) {
            return defaultValue;
        }
        });

    const setValue = (newValue) => {
        try {
            window.localStorage.setItem(keyName, JSON.stringify(newValue));
        } catch (err) {}
            setStoredValue(newValue);
    };
    return [storedValue, setValue];
};


export const getUTM = () => {

    const url = new URL(window.location.href)

    let data = null

    const getObjectFromUrlSearch = (string) => {
        const temp = []
        string.forEach(item => {
            let arr = item.split('=')
            temp.push({[arr[0]]: arr[1]})
        })
        const data = temp.reduce(((r, c) => Object.assign(r, c)), {})

        return data
    }
    
    if (url.search !== '' && url.search.indexOf('&') !== -1) {
        let searchString = url.search.slice(1).split('&')
        data = getObjectFromUrlSearch(searchString)
    } else if (url.search !== '' && url.search.indexOf('&amp') !== -1) {
        let searchString = url.search.slice(1).split('&amp;')
        data = getObjectFromUrlSearch(searchString)
    }
    
    if (data) {
        window.localStorage.setItem('utmData', JSON.stringify(data))
    }
}

export const useBodyScrollLock = () => {
    React.useLayoutEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = 'hidden';
        return () => (document.body.style.overflow = originalStyle);
    }, []);
};

export const getData = async (url) => {
    let res = await fetch(url, {
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
};