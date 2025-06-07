import { renderHook } from "@testing-library/react";
import useEffectDebugger from "./useEffectDebugger";

const consoleSpy = jest.spyOn(console, "log");
const componentName = "TestComponent";

describe("useEffectDebugger", () => {
  afterAll(() => {
    import.meta.env.NODE_ENV = "development";
  })

  it("props가 없으면 호출되지 않는다.", () => {
    renderHook(() => useEffectDebugger(componentName));

    expect(consoleSpy).not.toHaveBeenCalled();
  })

  it("최초에는 호출되지 않는다.", () => {
    const props = { Hello: "World" };

    renderHook(() => useEffectDebugger(componentName, props));

    expect(consoleSpy).not.toHaveBeenCalled();
  });

  it("props가 변경되지 않으면 호출되지 않는다.", () => {
    const props = { Hello: "World" };

    const { rerender } = renderHook(() => useEffectDebugger(componentName, props));

    expect(consoleSpy).not.toHaveBeenCalled();

    rerender();

    expect(consoleSpy).not.toHaveBeenCalled();
  });

  it("props가 변경되면 다시 호출된다.", () => {
    const props = { Hello: "World" };

    const { rerender } = renderHook(
      ({ componentName, props }) => useEffectDebugger(componentName, props),
      {
        initialProps: { componentName, props },
      }
    );

    const newProps = { Hello: "World2" };

    rerender({ componentName, props: newProps });

    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith(
      "[useEffectDebugger] TestComponent",
      { Hello: { before: "World", after: "World2" } }
    );
  })

  it("environment가 production이면 호출되지 않는다.", () => {
    import.meta.env.NODE_ENV = "production";

    const props = { Hello: "World" };
    
    const { rerender } = renderHook(
      ({ componentName, props }) => useEffectDebugger(componentName, props),
      {
        initialProps: { componentName, props },
      }
    );

    const newProps = { Hello: "World2" };

    rerender({ componentName, props: newProps });

    expect(consoleSpy).not.toHaveBeenCalled();
  });
});