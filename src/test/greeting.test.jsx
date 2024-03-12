import { render, screen  } from "@testing-library/react";

import Greeting from "../molecules/greeting";

test('render greeting', () => { 
    render ( <Greeting>Hello, World!</Greeting> ); 

    const helloWorldTest = screen.getByText( "Hello, World!" );
    expect(helloWorldTest).toBeInTheDocument();
});