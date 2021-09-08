import Calc from '../calc/Calc';
import CapitalBlock from '../Blocks/capitalBlock/CapitalBlock';
import Header from '../header/Header';
import Main from '../Blocks/main/Main';
import Plans from '../plans/Plans';
import ReliableBlock from '../Blocks/reliableBlock/ReliableBlock';
import SafeBlock from '../Blocks/safeBlock/SafeBlock';
import SecondBlock from '../Blocks/second/SecondBlock';
import ComfortableBlock from '../Blocks/comfortableBlock/ComfortableBlock';
import TabsSliderBlock from '../Blocks/tabsSliderBlock/TabsSliderBlock';


export default function MainPage() {

    return (
        <>
            <Header/>
            <Main/>
            <SecondBlock/>
            <CapitalBlock/>
            <ReliableBlock/>
            <SafeBlock/>
            <ComfortableBlock/>
            <TabsSliderBlock/>
            <Plans/>
            <Calc/>
        </>
    )
}