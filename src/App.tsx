import { FunctionComponent, useState } from 'react';
import data from './data'

const App: FunctionComponent = () => {
  const initialText: string[] = [];
  const [count, setCount] = useState(0);
  const [text, setText] = useState(initialText);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    let amount: number = (count <= 0) ? 1 : (count > 8) ? 8 : count;
    setText(data.slice(0, amount));
  }

  return (
    <section className="section-center">
      <h3>Do you want to genererate Lorem Ipsum... ?</h3>
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="amount">
          paragraphs:
        </label>
        <input type="number" name="amount" id="amount" value={count} onChange={(e) => setCount(+e.target.value)} />
        <button type="submit" className="btn">generate</button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  );
}

export default App;
