import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./components/SliderData";
import "./styles.css";

export default function App() {
  return <ImageSlider slides={SliderData} />;
}
