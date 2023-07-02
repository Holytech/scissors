'use client';
import { Accordion } from 'flowbite-react';

const FAQ = () => {
  return (
    <div className="py-12 px-28" id='faq'>
      <Accordion collapseAll>
        <Accordion.Panel>
          <Accordion.Title>What is Flowbite?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              <p>
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              <p>Check out this guide to learn how to</p>
              <a
                className="text-cyan-600 hover:underline dark:text-cyan-500"
                href="https://flowbite.com/docs/getting-started/introduction/"
              >
                <p>get started</p>
              </a>
              <p>
                and start developing websites even faster with components on top
                of Tailwind CSS.
              </p>
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>What is Flowbite?</Accordion.Title>
          <Accordion.Content className='bg-[#ffff]'>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              <p>
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              <p>Check out this guide to learn how to</p>
              <a
                className="text-cyan-600 hover:underline dark:text-cyan-500"
                href="https://flowbite.com/docs/getting-started/introduction/"
              >
                <p>get started</p>
              </a>
              <p>
                and start developing websites even faster with components on top
                of Tailwind CSS.
              </p>
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default FAQ;
