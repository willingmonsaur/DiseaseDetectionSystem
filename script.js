const bodyPartSelect = document.getElementById('body-part');
const symptomRelatedSelect = document.getElementById('symptom-related');
const symptomSelect = document.getElementById('symptom');
const checkSymptomsButton = document.querySelector('input[type="submit"]');

bodyPartSelect.addEventListener('change', () => {
  const bodyPart = bodyPartSelect.value;
  const symptomsRelated = getSymptomsRelated(bodyPart);
  const symptoms = getSymptoms(bodyPart);

  symptomRelatedSelect.innerHTML = '';
  symptomSelect.innerHTML = '';

  symptomsRelated.forEach((symptom) => {
    const option = document.createElement('option');
    option.value = symptom;
    option.text = symptom;
    symptomRelatedSelect.appendChild(option);
  });

  symptoms.forEach((symptom) => {
    const option = document.createElement('option');
    option.value = symptom;
    option.text = symptom;
    symptomSelect.appendChild(option);
  });
});

function getSymptomsRelated(bodyPart) {
  switch (bodyPart) {
    case 'head':
      return ['Headache', 'Ear pain', 'Eye Pain', 'Jaw pain', 'Nose Pain', 'Mouth', 'Cold', 'Cough'];
    case 'neck':
      return ['Neck pain', 'Throat Pain', 'Windpipe'];
    case 'chest':
      return ['Chest pain', 'Heartache', 'Breathing'];
    case 'abdomen':
      return ['Stomach ache', 'Urinal pain'];
    case 'back':
      return ['Back pain'];
    case 'arms':
      return ['hand pain', 'Burning', 'Minor Cuts', 'Numbness'];
    case 'legs':
      return ['Thighs', 'Legs', 'Toes'];
    default:
      return [];
  }
}

function getSymptoms(bodyPart, symptomRelated) {
  switch (bodyPart) {
    case 'head':
      if (symptomRelated === 'Mouth') {
        return ['Tooth ache', 'Tongue pain', 'Broken Tooth'];
      } else if (symptomRelated === 'Cold' || symptomRelated === 'Cough') {
        return ['Cold', 'Cough'];
      } else {
        return [symptomRelated];
      }
    case 'neck':
      if (symptomRelated === 'Neck pain') {
        return ['Neck pain'];
      } else {
        return [symptomRelated];
      }
    case 'legs':
      if (symptomRelated === 'Thighs') {
        return ['Thigh pain', 'Minor cut'];
      } else if (symptomRelated === 'Legs') {
        return ['Leg Pain', 'Minor cut'];
      } else if (symptomRelated === 'Toes') {
        return ['Finger nail removed', 'Toe pain'];
      } else {
        return [];
      }
    case 'back':
      if (symptomRelated === 'Back pain') {
        return ['Back pain'];
      } else {
        return [];
      }
    case 'abdomen':
      if (symptomRelated === 'Stomach ache') {
        return ['Stomach ache'];
      } else {
        return [symptomRelated];
      }
    case 'chest':
      if (symptomRelated === 'Chest pain') {
        return ['Chest pain', 'Breast Pain'];
      } else if (symptomRelated === 'Heartache') {
        return ['Heartache'];
      } else if (symptomRelated === 'Breathing') {
        return ['Troubled Breathing'];
      } else {
        return [];
      }
    case 'arms':
      if (symptomRelated === 'hand pain') {
        return ['Hand Pain'];
      } else {
        return [symptomRelated];
      }
    default:
      return [];
  }
}

symptomRelatedSelect.addEventListener('change', () => {
  const bodyPart = bodyPartSelect.value;
  const symptomRelated = symptomRelatedSelect.value;
  const symptoms = getSymptoms(bodyPart, symptomRelated);

  symptomSelect.innerHTML = '';

  if (symptoms.length > 0) {
    symptoms.forEach((symptom) => {
      const option = document.createElement('option');
      option.value = symptom;
      option.text = symptom;
      symptomSelect.appendChild(option);
    });
  } else {
    const option = document.createElement('option');
    option.value = symptomRelated;
    option.text = symptomRelated;
    symptomSelect.appendChild(option);
  }
});

checkSymptomsButton.addEventListener('click', (e) => {
    e.preventDefault();
  
    const bodyPart = bodyPartSelect.value;
    const symptomRelated = symptomRelatedSelect.value;
    const symptom = symptomSelect.value;
  
    const form = document.querySelector('form');
    form.style.display = 'none';
  
    const container = document.createElement('div');
    container.className = 'container';
  
    const weightLabel = document.createElement('label');
    weightLabel.htmlFor = 'weight';
    weightLabel.textContent = 'Weight:';
  
    const weightInput = document.createElement('input');
    weightInput.type = 'number';
    weightInput.placeholder = 'Weight (in kg)';
    weightInput.id = 'weight';
  
    const ageLabel = document.createElement('label');
    ageLabel.htmlFor = 'age';
    ageLabel.textContent = 'Age:';
  
    const ageInput = document.createElement('input');
    ageInput.type = 'number';
    ageInput.placeholder = 'Age';
    ageInput.id = 'age';
  
    const weightAndAgeContainer = document.createElement('div');
    weightAndAgeContainer.className = 'weight-and-age-container';
    weightAndAgeContainer.appendChild(weightLabel);
    weightAndAgeContainer.appendChild(weightInput);
    weightAndAgeContainer.appendChild(ageLabel);
    weightAndAgeContainer.appendChild(ageInput);
  
    const nameLabel = document.createElement('label');
    nameLabel.htmlFor = 'name';
    nameLabel.textContent = 'Name:';
  
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Name';
    nameInput.id = 'name';
  
    const nameContainer = document.createElement('div');
    nameContainer.className = 'name-container';
    nameContainer.appendChild(nameLabel);
    nameContainer.appendChild(nameInput);
  
    const analyzeButton = document.createElement('input');
    analyzeButton.type = 'button';
    analyzeButton.value = 'Analyze';
    analyzeButton.style.fontFamily = 'Ariel, sans-serif';
  
    container.appendChild(weightAndAgeContainer);
    container.appendChild(nameContainer);
    container.appendChild(analyzeButton);
  
    document.body.appendChild(container);
  
    analyzeButton.addEventListener('click', () => {
      const weight = document.getElementById('weight').value;
      const age = document.getElementById('age').value;
      const name = document.getElementById('name').value;
  
      // Add your logic here to analyze the symptoms and display the result
      alert(`Analyzing symptoms for ${name}...`);
    });
  });

  const aboutUsButton = document.querySelector('.nav-button:nth-child(1)');

  aboutUsButton.addEventListener('click', () => {
    const form = document.querySelector('form');
    form.style.display = 'none';
  
    const aboutUsContainer = document.createElement('div');
    aboutUsContainer.className = 'about-us-container';
  
    const aboutUsContent = document.createElement('div');
    aboutUsContent.className = 'about-us-content';
  
    const aboutUsText = document.createElement('p');
    aboutUsText.textContent = 'This is a disease detection system developed by our csp team. The system allows users to input their symptoms and provides a possible diagnosis based on the input. The system is still in its early stages and is not intended to be used as a substitute for professional medical advice. This Project is done by Kruth Aryan Kadam, Jairaj Chilukala, Lekhak Surya and Vamshi Kavampally';
  
    const closeButton = document.createElement('button');
    closeButton.className = 'about-us-close-button';
    closeButton.textContent = 'Close';
  
    closeButton.addEventListener('click', () => {
      aboutUsContainer.remove();
      form.style.display = 'block';
    });
  
    aboutUsContent.appendChild(aboutUsText);
    aboutUsContent.appendChild(closeButton);
    aboutUsContainer.appendChild(aboutUsContent);
    document.body.appendChild(aboutUsContainer);
  });

  const head = document.getElementById('head');
const neck = document.getElementById('neck');
const body = document.getElementById('body');
const leftArm = document.getElementById('left-arm');
const rightArm = document.getElementById('right-arm');
const leftHand = document.getElementById('left-hand');
const rightHand = document.getElementById('right-hand');
const leftLeg = document.getElementById('left-leg');
const rightLeg = document.getElementById('right-leg');
const leftFoot = document.getElementById('left-foot');
const rightFoot = document.getElementById('right-foot');
const bodyPartInput = document.getElementById('body-part-input');

head.addEventListener('click', () => {
  bodyPartInput.value = 'Head';
});

neck.addEventListener('click', () => {
  bodyPartInput.value = 'Neck';
});

body.addEventListener('click', () => {
  bodyPartInput.value = 'Body';
});

leftArm.addEventListener('click', () => {
  bodyPartInput.value = 'Left Arm';
});

rightArm.addEventListener('click', () => {
  bodyPartInput.value = 'Right Arm';
});

leftHand.addEventListener('click', () => {
  bodyPartInput.value = 'Left Hand';
});

rightHand.addEventListener('click', () => {
  bodyPartInput.value = 'Right Hand';
});

leftLeg.addEventListener('click', () => {
  bodyPartInput.value = 'Left Leg';
});

rightLeg.addEventListener('click', () => {
  bodyPartInput.value = 'Right Leg';
});

leftFoot.addEventListener('click', () => {
  bodyPartInput.value = 'Left Foot';
});

rightFoot.addEventListener('click', () => {
  bodyPartInput.value = 'Right Foot';
});