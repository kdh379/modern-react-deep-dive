import useEffectDebugger from "../__test__/useEffectDebugger";

function CustomHookTest(props: {a: string; b:number}) {
  const { a, b } = props;

  useEffectDebugger("CustomHookTest", props);

  return (
    <div>
      <h1>CustomHookTest</h1>
      <p>a: {a}</p>
      <p>b: {b}</p>
    </div>
  )
}

export default CustomHookTest