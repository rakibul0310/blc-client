import Spline from "@splinetool/react-spline";

export default function HeroAnimation() {
  return (
    <div className="hero__animation__container">
      <Spline
        width={200}
        className="hero__animation__frame"
        scene="https://prod.spline.design/oWQ3tAUJvgE8nK8t/scene.splinecode"
      />
    </div>
  );
}
