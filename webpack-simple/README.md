# webpack-simple

Simple webpack-typescript project demonstrating dangerous use of calling derived-class virtual function in base class constructor.

1. To build and run:
```
npm install
npx webpack-dev-server
```
2. Open http://localhost:4500/ in web browser.

3. Open browser console, shows:
```
End of Derived.initialize, this.variable = 23
End of Derived.constructor, this.variable = undefined
Client code, derived.variable = undefined
```
Calling the virtual overridden function `Derived.initialize()` from the `Base` class constructor means that the member variable `Derived.variable` is assigned to before it has definitely been allocated in the `Derived` constructor. Hence the variable remains undefined.

If you switch `target` in `tsconfig.ts` to `ES2018` or `ES2020` then this example works as expected. But with `ES2022` the variable is undefined.
