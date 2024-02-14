import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
    return (
        <div className="py-10">
            <div className="p-4 bg-red-100 rounded-lg mx-10">
        <Accordion
          title="Q. What types of damages does Fabtech repair?"
          answer="Fabtech repairs various types of damages including cracked screens, motherboard issues, water damage, battery replacement, and more."
        />
        <Accordion
          title="Q. Can Fabtech repair all brands of smartphones?"
          answer="Yes, Fabtech can repair all popular brands of smartphones including Samsung, Apple, Google, Oneplus, Vivo, Oppo, Mi, Nokia, and more"
        />
        <Accordion title="Q. Is it safe to hand over my device to Fabtech for repair?" answer="Yes, it is completely safe to hand over your device to Fabtech for repair. Fabtech ensures complete data privacy and security." />
        <Accordion
          title="Q. How long does it take to repair a mobile device?"
          answer="The time it takes to repair a mobile device depends on the type of repair needed. FABTECH aims to complete repairs as quickly as possible, but some repairs may take longer than others."
        />
        <Accordion
          title="Q. How much does it cost to repair a mobile device?  "
          answer="The cost of repairing a mobile device depends on the type of repair needed. FABTECH offers competitive pricing for all repair services."
        />
        <Accordion
          title="Q. What payment methods does FABTECH accept for mobile repair services?"
          answer="FABTECH accepts a variety of payment methods, including cash, credit cards, and mobile payments."
        />
      </div>
        </div>
        
      );
};

export default FAQ;