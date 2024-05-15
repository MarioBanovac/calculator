interface IappState {
  output: null | string;
}

export const appState: IappState = {
  output: '12',
};

/* 

The state can be represented like the following
{
  output:string | null = null
}

You have following types of buttons:
- number button 0-9
- arithmetic operator buttons + - x / % =
- decimal operator .
- delete operator C

When you press a button, the output needs to change according to the following scenarios:
1) If the user presses a number button the number should be added to the stateObject.output using string concatenation
2) If user presses the delete button the stateObject.slice(0, -1) takes place

*/
