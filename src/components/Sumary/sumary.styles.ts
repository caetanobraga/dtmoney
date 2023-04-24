import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0%.25rem;
    color: var(--texte-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      line-height: 3rem;
      font-weight: 500;
    }

    &.circle-in {
      border: 1px solid green;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &.circle-out {
      border: 1px solid red;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &.circle {
      border: 1px solid white;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &.highlight-background {
      background: var(--green);
      color: #ffffff;
    }
  }
`;
