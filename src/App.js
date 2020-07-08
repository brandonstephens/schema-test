import React, { useEffect } from "react";
import "./styles.css";

export default function App() {
  useEffect(() => {
    const script = document.createElement("script");

    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the best way to rent a suit or tux?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Long gone are the days of driving to your local Men’s Wearhouse or another retailer and trying on a suit off the rack that’s been tried on by other people. Now you can easily design your wedding suit or tux from home at Menguin.com. Once you have the look you like we’ll send a Free Home Try-On to your door. "
          }
        },
        {
          "@type": "Question",
          name: "Does Men’s Wearhouse tailor?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. But you have to schedule a fitting based on each location's availability.  At Menguin, we do everything online with free shipping. Height, weight, waist size, age, and shoe size are all we need to get you a correctly fitting suit or tuxedo."
          }
        },
        {
          "@type": "Question",
          name: "How far in advance do you need to rent a suit?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Wedding suit rental is almost too easy with our easy to use online suit rental process. Most people start planning their rental about 4 months before the event, but you can plan whenever you want from the comfort of home with Menguin. Just make sure you schedule your Free Home Try-On as part of your planning process, and keep in mind we’ll send your wedding suit or tuxedo 14 days before your event."
          }
        },
        {
          "@type": "Question",
          name: "Where can I get measured for a suit at Menguin.com?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "This is the easiest part. There’s no need to go to a Men’s Wearhouse or local retailer. We use your height, weight, waist size, age, body type, and shoe size to get you the correct fit. Our Patented Algorithm provides a fit 90% more accurate than a local tailor. If anything needs adjusting, we’ll send you replacement items for free."
          }
        },
        {
          "@type": "Question",
          name: "Is it cheaper to buy or rent a tux?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "It’s cheaper, and easier to rent a tux. Buying a suit or tuxedo from the Men’s Wearhouse or local retailer will take time, and cost more to get the same quality as our rentals. You can rent quickly, easily, and cheaper with Menguin. "
          }
        },
        {
          "@type": "Question",
          name: "What if I have to postpone or cancel my Menguin order?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "We want to be the easiest part of our event, including our suit rental cancellation policy. If your date changes, you can postpone to a new date with no fees. If your event is cancelled, you can get a full refund if you cancel within 21 days of your event date."
          }
        }
      ]
    });
    script.type = "application/ld+json";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </>
  );
}
