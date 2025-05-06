import React, { useState } from 'react';

const WizardModal = ({
  isOpen = true,
  onClose = () => console.log('Modal closed'),
  title = 'Step Wizard',
  fullscreen = false, // Toggle full-screen
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: 'Step 1: Personal Information',
      description: (
        <>
          <p className="mb-4">
            To get started, please provide your personal information. This will help us create your account and keep you updated with notifications.
          </p>
          <img
            src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?t=st=1746489298~exp=1746492898~hmac=6a797f8a115ffa4d1f551a650243d56f9493010916440531dc8616b97db09347&w=740"
            alt="Step 1"
            className="w-full h-auto rounded-lg object-cover"
          />
        </>
      ),
    },
    {
      title: 'Step 2: Contact Information',
      description: (
        <>
          <p className="mb-4">
            Please provide your email and phone number to stay in touch with us for updates, promotions, and more.
          </p>
          <img
            src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?t=st=1746489298~exp=1746492898~hmac=6a797f8a115ffa4d1f551a650243d56f9493010916440531dc8616b97db09347&w=740"
            alt="Step 2"
            className="w-full h-auto rounded-lg object-cover"
          />
        </>
      ),
    },
    {
      title: 'Step 3: Security Setup',
      description: (
        <>
          <p className="mb-4">
            Set up your password and select security questions to help secure your account.
          </p>
          <img
            src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?t=st=1746489298~exp=1746492898~hmac=6a797f8a115ffa4d1f551a650243d56f9493010916440531dc8616b97db09347&w=740"
            alt="Step 3"
            className="w-full h-auto rounded-lg object-cover"
          />
        </>
      ),
    },
    {
      title: 'Step 4: Review and Submit',
      description: (
        <>
          <p className="mb-4">
            Please review all the information you have provided, and then click submit to complete the setup.
          </p>
          <img
            src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?t=st=1746489298~exp=1746492898~hmac=6a797f8a115ffa4d1f551a650243d56f9493010916440531dc8616b97db09347&w=740"
            alt="Step 4"
            className="w-full h-auto rounded-lg object-cover"
          />
        </>
      ),
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } ${fullscreen ? 'fixed inset-0 z-50' : 'relative w-full h-auto p-4 border border-dashed border-gray-300'} flex items-center justify-center bg-black/50 backdrop-blur-sm`}
    >
      <div className="bg-white rounded-2xl shadow-lg max-w-md w-full mx-4 p-6 relative animate-fade-in">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">{steps[currentStep].title}</h3>
          <div className="text-gray-700">{steps[currentStep].description}</div>
        </div>
        <div className="flex justify-between gap-4">
          <button
            onClick={handlePrevious}
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 disabled:opacity-50"
            disabled={currentStep === 0}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
            disabled={currentStep === steps.length - 1}
          >
            Next
          </button>
        </div>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          aria-label="Close modal"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default WizardModal;
