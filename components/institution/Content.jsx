 import Institution from './Institution';
import Images from './Images';
 function Content() {
 
    return (
        <div className="flex items-center justify-between w-screen overflow-hidden h-[100vh] flex-row">
            <Institution  />
            <Images   />
        </div>
    );
}

export default Content;
