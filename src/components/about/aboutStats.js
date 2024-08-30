import { useEffect, useRef, useState } from 'react';

const CountupBoxes = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [target1, setTarget1] = useState(10);
  const [target2, setTarget2] = useState(55);
  const [target3, setTarget3] = useState(200);

  const containerRef = useRef(null);
  const interval1Ref = useRef(null);
  const interval2Ref = useRef(null);
  const interval3Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            startCounting();
          } 
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const startCounting = () => {
    interval1Ref.current = setInterval(() => {
      setCount1((prevCount) => {
        if (prevCount < target1) {
          return prevCount + 1;
        } else {
          clearInterval(interval1Ref.current);
          interval1Ref.current = null;
          return prevCount;
        }
      });
    }, 50);

    interval2Ref.current = setInterval(() => {
      setCount2((prevCount) => {
        if (prevCount < target2) {
          return prevCount + 1;
        } else {
          clearInterval(interval2Ref.current);
          interval1Ref.current = null;
          return prevCount;
        }
      });
    }, 30);

    interval3Ref.current = setInterval(() => {
      setCount3((prevCount) => {
        if (prevCount < target3) {
          return prevCount + 1;
        } else {
          clearInterval(interval3Ref.current);
          interval1Ref.current = null;
          return prevCount;
        }
      });
    }, 20);
  };




  return (
    <div
      ref={containerRef}
      className="flex justify-center items-center py-20 bg-secondary font-cinzel"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 w-full max-w-4xl mx-auto mt-10 sm:justify-center">
      <div className="text-gray-600 px-8 py-6 rounded-lg flex flex-col items-center">
        <h3 className="text-7xl font-black mb-3">{isVisible ? count1 : 0}</h3>
        <p className="text-2xl font-normal font-raleway">Years in Business</p>
      </div>
      <div className="text-gray-600 px-8 py-6 rounded-lg flex flex-col items-center">
        <h3 className="text-7xl font-black mb-3">{isVisible ? count2 : 0}</h3>
        <p className="text-2xl font-normal font-raleway">Team Members</p>
      </div>
      <div className="text-gray-600 px-8 py-6 rounded-lg pb-0 flex flex-col items-center">
        <h3 className="text-7xl font-black mb-3">{isVisible ? count3 : 0}</h3>
        <p className="text-2xl font-normal font-raleway">Jobs created</p>
      </div>
      </div>
    </div>

  );
};

export default CountupBoxes;