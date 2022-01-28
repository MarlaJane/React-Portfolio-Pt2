import AboutBlock from "../blocks/about/index";
import WorksBlock from "../blocks/work/index";
import ContactBlock from "../blocks/contact/index";
import './css/index.css';

export default function Body(props) {
    const { currentPage, setCurrentPage } = props;

    const renderContent = () => {
        let bodyBlocks = [];

        if (currentPage === 'About') {
            bodyBlocks = [
                <AboutBlock key='About' setCurrentPage={setCurrentPage} />,
            ];
        }
        if (currentPage === 'Work') {
            bodyBlocks = [
                <WorksBlock key='Work' setCurrentPage={setCurrentPage} />,
            ];
        }
        if (currentPage === 'Contact') {
            bodyBlocks = [
                <ContactBlock key='Contact' setCurrentPage={setCurrentPage} />,
            ];
        }

        return (
            <div className="content-sections">
                {bodyBlocks}
            </div>
        );
    }


    return (
        <div className="content-wrapper">
            {renderContent()}
        </div>
    );
}