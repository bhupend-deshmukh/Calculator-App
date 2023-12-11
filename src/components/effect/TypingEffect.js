import React, { useState, useEffect } from 'react';

const TypingEffect = () => {
  const [text, setText] = useState('');
  const word = 'Calculator App';
  const typingSpeed = 80; // Adjust typing speed as needed (in milliseconds)
  const deletingSpeed = 40; // Adjust deleting speed as needed (in milliseconds)

  useEffect(() => {
    let isDeleting = false;
    let currentIndex = 0;
    let currentText = '';

    const type = () => {
      if (!isDeleting) {
        currentText = word.substring(0, currentText.length + 1);
        setText(currentText);
        if (currentText === word) {
          isDeleting = true;
          setTimeout(type, 1000); // Wait before deleting
        } else {
          setTimeout(type, typingSpeed);
        }
      } else {
        currentText = word.substring(0, currentText.length - 1);
        setText(currentText);
        if (currentText === '') {
          isDeleting = false;
          currentIndex++;
          setTimeout(type, typingSpeed); // Wait before typing next phrase
        } else {
          setTimeout(type, deletingSpeed);
        }
      }
    };

    setTimeout(type, typingSpeed);
  }, [word]);

  return (
    <div>
      <p className='font-bold text-2xl '>{text}</p>
    </div>
  );
};

export default TypingEffect;
