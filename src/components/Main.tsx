import { CONTENT } from "../util/DATA";
import type { entry } from "../util/DATA";
import '../assets/images/img1.png'

const Main = () => {
  return (
    <div className="items">
      {CONTENT.map((item:entry) => (
        <>
            <div className="item">
                <div className="description">
                    {item.title}
                </div>
                <div className="image">
                    <div className="tags">
                        <span className="year">
                            {item.year}
                        </span>
                        {item.categories.map((category) => (
                                <>
                                    <span className="category">
                                        {category === "Computer Vision" ? "👁️Computer Vision" :
                                         category === "NLP" ? "📃NLP" : null}
                                    </span>
                                </>
                            ))}
                    </div>
                    <img src={`src/assets/images/${item.image}`} alt="image"/>
                </div>
            </div>
        </>
      ))}
    </div>
  );
};

export default Main;
