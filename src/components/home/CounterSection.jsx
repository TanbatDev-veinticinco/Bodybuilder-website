import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { counters } from '../data/siteData';
import backgroundimg2 from '../../assets/img/bg/counter-bg1.png';
import topimg1 from '../../assets/img/bg/sec-shape-top.png';
import bottomimg1 from '../../assets/img/bg/sec-shape-bottom.png';


const CounterCard = ({ icon, end, suffix, label, decimals }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div className="col-sm-6 col-xl-auto" ref={ref}>
      <div className="counter-card">
        <div className="counter-card_icon">
          <img src={icon} alt={label} />
        </div>
        <div className="media-body">
          <h2 className="counter-card_number">
            {inView ? <CountUp end={end} duration={2} decimals={decimals} /> : '0'}
            {suffix}
          </h2>
          <p className="counter-card_text">{label}</p>
        </div>
      </div>
    </div>
  );
};

const CounterSection = () => {
  return (
    <div className="counter-area-1" style={{ backgroundImage: `url(${backgroundimg2})` }}>
      <div className="counter-sec-shape-top">
        <img src={topimg1} alt="shape" />
      </div>
      <div className="counter-wrap1 space">
        <div className="container">
          <div className="row gy-40 justify-content-between">
            {counters.map((counter, index) => (
              <CounterCard key={index} {...counter} />
            ))}
          </div>
        </div>
      </div>
      <div className="counter-sec-shape-bottom">
        <img src={bottomimg1} alt="shape" />
      </div>
    </div>
  );
};

export default CounterSection;
