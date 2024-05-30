import {RefObject} from 'react';

type ElRef = RefObject<HTMLSpanElement>;

function waitForMs(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function updateFontColor(elRef: ElRef, color: string) {
  if (!elRef.current) return;
  elRef.current.style.color = color;
}

async function typeSentence(sentence: string, elRef: ElRef, delay = 100) {
  const letters = sentence.split('');
  let i = 0;
  while (i < letters.length) {
    await waitForMs(delay);
    elRef.current?.append(letters[i]);
    i++;
  }
  return;
}

async function deleteSentence(elRef: ElRef) {
  if (!elRef.current?.textContent) return;
  let sentence = elRef.current?.textContent;
  const letters = sentence.split('');
  while (letters.length > 0) {
    await waitForMs(100);
    letters.pop();
    elRef.current.textContent = letters.join('');
  }
}

interface Carousel {
  text: string;
  color: string;
}

async function carousel(carouselList: Carousel[], elRef: ElRef) {
  let i = 0;
  while (true) {
    updateFontColor(elRef, carouselList[i].color);
    await typeSentence(carouselList[i].text, elRef);
    await waitForMs(3000);
    await deleteSentence(elRef);
    await waitForMs(500);
    i++;
    if (i >= carouselList.length) {
      i = 0;
    }
  }
}

export {typeSentence, deleteSentence, carousel};
