import { CONTENT } from "../util/DATA";
import type { entry } from "../util/DATA";
import '../assets/images/img1.png'

const Main = () => {
  return (
    <div>
      {CONTENT.map((item:entry) => (
        <>
            <div className="item">
                <div className="description">
                    {item.title}
                </div>
                <div className="image">
                    <img src={`src/assets/images/${item.image}`} alt="image"/>
                </div>
            </div>
        </>
      ))}
    </div>
  );
};

export default Main;
