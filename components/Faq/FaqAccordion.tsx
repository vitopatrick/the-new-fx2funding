"use client";
import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    title: "how does the maximum drawdown work",
    ans: "The maximum drawdown starts at negative 5% of your starting balance.If your negative equity reaches 5% of your starting balance, our system will automatically detect the violation and your account will be terminated immediately.Once you achieve a 5% return, it stops trailing and the drawdown is locked at your starting balance.<br/> Example: When starting with a $100,000 funded account, your account would violate the maximum drawdown rule when your equity breaches $95,000. If you profit $2,000 with a closed balance, then your new maximum drawdown would be $2,000 higher than previously ($97,000). If you continue growing the account to $105,000, the new maximum drawdown would be permanently locked at the starting balance of $100,000. This would allow you to compound the account freely without exceeding the maximum drawdown. For example, if you achieve a new high watermark of 40% (a closing balance of $140,000), you would (so long as you don’t lose more than 4% of your account in one day) only violate the maximum drawdown if your account lost more than $40,000 and is under $100,000.",
  },
  {
    id: 2,
    title: "How does the daily drawdown work?",
    ans: "The daily max loss is the maximum your account is allowed to lose in one day. The daily max loss is 4% of your previous day’s closing balance (as of 17:00 EST). If a trader’s negative equity reaches 4% of their previous day’s balance, our system will automatically detect the violation and their account will be terminated immediately. Note: The daily max loss is not based on the previous day’s equity. It is based on the balance in your account. Example: If your previous day’s closing balance was $100,000, your account would be terminated if your equity reached $96,000. If your account had floating equity of $10,000 at the previous day’s closing, it would still be terminated if your equity reached $96,000.",
  },
  {
    id: 3,
    title: "Is the evaluation fee refundable if I pass?",
    ans: "Our traders pay a one-time fee to take FX2’s one-phase evaluation. This evaluation is a service rendered immediately upon purchase with no refund possible. All transactions made are final.If you are purchasing an evaluation through FX2, you are doing so in acknowledgment that your purchase is non-refundable.",
  },
  {
    id: 4,
    title: "Can I scale up my account?",
    ans: "Yes. If you have achieved a profit of 10%, you may request a payout for your percentage of the profit and we will match it with a 10% increase in your capital. If your account continues to gain profit and your balance closes with another 10% profit, you may request another payout and we will match it again with another 10%. Please note, scaling is capped at $1,000,000. Example: You have a $100,000 funded account and make $10,000 (10%) of profit. You request your first payout. (IMPORTANT: Your first payout cannot be for the total $10,000, because your maximum drawdown is at $100,000, and if you withdraw the entire $10,000, although we will give you your money, we will also close your account. Instead we recommend your first payout be for $5,000, so that you still have 5% to drawdown before breaching). So you request a payout of $5,000. We pay you your share of the $5,000 and we increase your capital by 10%, so your current balance stands at $115,000 (your maximum drawdown is still at $100,000). You then make another 10% profit ($10,000). You request a payout, we pay you your share of the $10,000 and increase your capital with another $10,000, so your current account stands at $125,000. (At this point, your maximum drawdown is still at $100,000 and you've already pocketed your percentage of $15,000). ",
  },
  {
    id: 5,
    title: "How can I lose my account?",
    ans: `There are only 3 ways to lose your account. 
1. Daily Drawdown

Accounts must not incur a 4% drawdown on a single day.

2. Maximum Drawdown

Accounts must not incur a 5% drawdown on total account size. This 5% drawdown trails your account until you achieve a 5% return on your account. Once you achieve a 5% return, it stops trailing and the drawdown is locked at your starting balance

3. Inactivity

Accounts must not remain inactive for 30 days or more.

Note – if a trader notifies FX2 Funding that they cannot make a trade for 30 days due to extreme circumstances, we will allow the account to remain open. Such exceptions will be made on a case-by-case basis, and will generally only be allowed once.`,
  },
  {
    id: 6,
    title: "how does the maximum drawdown work",
    ans: "The maximum drawdown starts at negative 5% of your starting balance.If your negative equity reaches 5% of your starting balance, our system will automatically detect the violation and your account will be terminated immediately.Once you achieve a 5% return, it stops trailing and the drawdown is locked at your starting balance.<br/> Example: When starting with a $100,000 funded account, your account would violate the maximum drawdown rule when your equity breaches $95,000. If you profit $2,000 with a closed balance, then your new maximum drawdown would be $2,000 higher than previously ($97,000). If you continue growing the account to $105,000, the new maximum drawdown would be permanently locked at the starting balance of $100,000. This would allow you to compound the account freely without exceeding the maximum drawdown. For example, if you achieve a new high watermark of 40% (a closing balance of $140,000), you would (so long as you don’t lose more than 4% of your account in one day) only violate the maximum drawdown if your account lost more than $40,000 and is under $100,000.",
  },
  {
    id: 7,
    title: "am i trading real money",
    ans: `Yes. We fund our live trader accounts with real money. We do not approve of prop firms that provide their passing traders with demo accounts and pay traders’ profit shares out of their own pockets. Besides the risk of ruin, we find it disreputable to root against our own traders. 

On the contrary, at FX2 Funding we root hard for our traders’ success because when you benefit, we benefit as well.`,
  },
  {
    id: 8,
    title: "Can i trade the news",
    ans: `Yes. Our traders may trade all news events.`,
  },
  {
    id: 9,
    title: "Can I trade with expert advisors",
    ans: `Yes. EAs, copy traders, scripts, and indicators are all permitted.  That being said, malicious practices, such as taking advantage of arbitrage pricing or latency are against the rules. High frequency trading bots are also prohibited. FX2 reserves the right to review all EAs before awarding a trader their funded account. If we detect that your trading constitutes any malicious practices, not limited to the above, your participation in the program may be terminated and may include forfeiture of any fees paid to FX2 Funding.`,
  },
  {
    id: 10,
    title: "When Will i get my payout",
    ans: `A trader is eligible for their first payout only 7 days after receiving their funded account. All subsequent payouts are available every 14 days. A request can be easily made by clicking the blue withdraw button in the “wallet” tab of his dashboard.
FX2 processes all payouts via Deel.com. Traders who pass the FX2 evaluation will immediately receive instructions how to create a deel account. With Deel.com, we offer payouts via bank transfer, Revolut, PayPal, Wise, Payoneer, Coinbase and Binance.`,
  },
  {
    id: 11,
    title: "how Much leverage can i trade with",
    ans: `We provide a leverage of 1:10 on Forex pairs, 1:5 on indices and 1:2 on crypto pairs.`,
  },
];

const FaqAccordion = () => {
  const [selectedIndex, setIndex] = useState(0);

  const changeIndex = (id: number) => {
    if (selectedIndex === id) {
      return setIndex(0);
    }
    setIndex(id);
  };
  return (
    <div className="my-10 font-main">
      {faqs.map((faq) => (
        <div key={faq.id}>
          <h2>
            <button
              type="button"
              onClick={() => changeIndex(faq.id)}
              className="flex items-center justify-between w-full p-5 font-medium text-left text-xl text-white bg-blue-700/20"
            >
              <span>{faq.title}</span>
              <svg
                data-accordion-icon
                className="w-6 h-6 rotate-180 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div className={selectedIndex === faq.id ? "block" : "hidden"}>
            <div className="p-5 bg-transparent">
              <p className="mb-2 text-gray-500 dark:text-gray-400">{faq.ans}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
