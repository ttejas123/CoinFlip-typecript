import React, { ReactNode } from 'react';
import MediumModel from '../BaseComponents/MediumModel';

type QA = {
  question: string;
  answer: ReactNode;
};

const questionsAndAnswers: QA[] = [
  {
    question: 'What tokens can I flip?',
    answer: 'You can flip Solana or select a token from our constantly growing list.',
  },
  {
    question: 'What are the fees?',
    answer: <>We charge <span className="FAQ-highlighter inline"> 3% </span>per flip irrespective of winning or losing. For example, flipping <span className="FAQ-highlighter inline">1 SOL</span> will cost a total for <span className="FAQ-highlighter inline">1.03 SOL.</span></>,
  },
  {
    question: 'How do I collect my winnings?',
    answer: 'The winning amount will be automatically transferred by us.',
  },
  {
    question: "What's the max amount I can bet?",
    answer: 'Every token has it\'s own max limit based on our treasury size. You can bet any amount upto the max limit!',
  },
  {
    question: 'Why is the balance shown slightly less than my actual wallet balance?',
    answer: <>We have calculated your balance to compensate for <span className="FAQ-highlighter inline">3%</span> fees.</>,
  },
  {
    question: 'What are the onchain addresses?',
    answer: <>Program: <span className="FAQ-highlighter inline">72D3En8GQycjtunxf9mgyR8onzYdPqYFsKp4myUzhaRZ</span><br />Treasury: <span className='FAQ-highlighter inline'>ByjcyGru3RTeAheTjoFJi7mL8knNmzHz1twuoqjbjRtF</span></>,
  },
  {
    question: 'How do I know FFFlip is fair?',
    answer: <>All flips can be checked onchain through our program address above or by tracking our flipping wallet: FFFzSCxKWZZvetfW86JbvMRUJxjkMAwMu35cEe4HDyaN. You can also hit our <span className="FAQ-highlighter inline">API</span> to examine the odds yourself.</>,
  },
  {
    question: 'How do I link my twitter profile?',
    answer: <>You can do this on the Famous Fox website <span className='FAQ-highlighter inline'>here.</span></>,
  },
  {
    question: 'How do I verify my project\'s token?',
    answer: <>Fill out this form <span className='FAQ-highlighter inline'>here.</span></>,
  },
  {
    question: 'How do I blacklist myself from ffflip?',
    answer: <>Contact us on our discord <span className='FAQ-highlighter inline'>here.</span></>,
  },
];

const FAQ: React.FC = () => {
  return (
    <MediumModel UniqueId='My-FAQ-Modal'>
        <div className='md:px-8 pt-8'>
            {questionsAndAnswers.map(({ question, answer }, index) => (
                <div key={index} className='mb-10'>
                <div className='text-base-big font-extrabold'>{question}</div>
                <p>{answer}</p>
                </div>
            ))}
        </div>
    </MediumModel>
  );
};

export default FAQ;
