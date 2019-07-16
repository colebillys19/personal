At Rithm there's a "company projects" section of the program. During this time, students get valuable experience working on a real world code base.   
   
_"Rithm School partners with professional engineering teams to provide our students with real-world experience during their time with us. This also helps partner companies execute important projects and product updates."_ [(Rithm)](https://www.rithmschool.com/company-projects)   
   
Needless to say, I was excited about getting to apply what I'd learned and contribute to something people were actually using. I was assigned to the group working on GIFsmos, an open source application overseen by the company Desmos.

Desmos is _"an advanced graphing calculator implemented as a web application." "Users can create accounts and save the graphs and plots that they have created to them."_ [(Wikipedia)](https://en.wikipedia.org/wiki/Desmos_(graphing)) In short, Desmos provides a free alternative to the overpriced calculators produced by companies like Texas Instruments.   
   
GIFsmos is the brainchild of Desmos developer [Chris Lusto](https://github.com/ctlusto). The tool allows users to generate and download animated GIF images that illustrate how a graph may change over time. For example, a teacher could add a GIF to their lesson's slides ahead of time - rather than navigating to Desmos on the fly.   
   
Although Chris had written a fully functional application, it was still pretty bare bones at the time my group began working on it. We were all excited about getting a chance to make meaningful contributions to an open source project.

![GIFsmos](https://res.cloudinary.com/dxklaorw6/image/upload/v1563234973/gifsmos.png)   
   
A big part of company projects is getting accustomed to how a team of developers work together effectively. Learning how to communicate, navigate git/github, and not step on eachothers tasks proved to be challenging at the start. Not to mention we all had to get acclimated to the code base.   
   
GIFsmos was built using React and Redux. It's pretty much an exclusively front-end application. Although it's not very big it did take some getting used to. I made sure to spend time tinkering, reading the code, drawing out the component hierarchy, and noting how state was organized.

I started out by adding functionality allowing a user to specify a file name prior to download. This involved creating a form component to be used when a user generates their GIF. This was pretty straightforward and I was able to finish it quickly.   
   
Next, I decided to step out of my comfort zone a bit. Up to this point, I hadn't had much luck writing good tests ...or really just understanding what a good test was. I decided I needed some practice. One of the issues listed on the GitHub repo highlighted the lack of testing for the application's async action creators - I felt like that sounded intimidating enough. (:   
   
In an application using Redux, data is sent from the application to the Redux store via an action. An action is an object with a key of `type` and often some data with a key of `payload`. Actions are created by functions simply called action creators. An action creator's main functionality is to specify the action's type, place any necessary data in the payload, and return the object.   
   
![action](https://media.giphy.com/media/14iuQvzNsgezDO/giphy.gif)   
   
Unforunately, if you're just using Redux out of the box that's all an action creator does. There's no way to add additional logic. That being said, we can make use of a dependency that allows an action creator to return another function - thus allowing it to do whatever it wants. These modified action creators are called "thunks".   
   
The [`redux-thunk`](https://github.com/reduxjs/redux-thunk) package adds middleware to Redux that checks what each action creator returns. If it returns an action, then things run as normal. If it happens to return another function, it will pass that function two arguments: `dispatch` and `getState`. In turn, a thunk can read state, perform whatever logic it wants, and dispatch as many actions (or other thunks) as it wants.   
   
I should point that thunks allow for asynchronous data flow - something that Redux does not normally support. So thunks are your friend.
   
I bring up thunks because this is what I was testing. My goal was to test that each thunk was dispatching the appropriate action/actions using Jest. This was a challenge - but after some trial and error I was able to get a feel for it.   
   
A key part in writing these tests was the [`redux-mock-store`](https://github.com/dmitry-zaets/redux-mock-store) package. When you pass a thunk to the mock store's dispatch method you recieve an array containing every action the function dispatches. Using this array I was able to check that the actions being dispatched matched the ones I expected to be dispatched.   
   
As an aside, some of these thunks were making use of the Desmos calculator instance - which happened to be getting initialized in the `<App/>` component's `didMount` method. Since there was no sense in mounting App for these tests, the calculator instance was undefined and tests were failing. I ended up having to move the initialization of the calculator to it's own file. That way I could import the file and mock the calculator in the testing environment.

Once I finished testing action creators, I started work on writing render tests for the UI. For this, Chris recommended we use [React Testing Library](https://github.com/testing-library/react-testing-library). This was brand new as we'd been using Enzyme for React testing thus far in the program. However, after doing a bit of research I found that quite a few developers prefer RTL over Enzyme. With React Testing Library, the idea is you're testing each component's DOM output as opposed to the component itself. There's less moving parts, which mitigates writing tests you don't actually need.   
   
_"...you want your tests to avoid including implementation details of your components and rather focus on making your tests give you the confidence for which they are intended."_   
\- [Kent C. Dodds](https://github.com/kentcdodds), creator of React Testing Library   
   
![action](https://kentcdodds.com/static/738c6a00f2f5e150ece90e3d1d912cb5/6b190/0.png)  
   
To use React Testing Library effectively, I had to change the way I approached testing components - so I took some extra time to read and watch videos on RTL best practices. Step one was to make sure smoke tests were passing for each component - which involved adding default props to components that needed them, and in some cases passing mock props to components I was rendering.   
   
Next, I wrote tests verifying that each component was rendering the content it was supposed to. Finally, I tested that any functionality was behaving as expected - making sure buttons we're functional, forms could be submitted, etc.   
   
Tests are a very important part of every software application. While often overlooked, they can benefit project immensely. Tests:   
   
 - encourage clean, modular code
 - force the developer to understand exactly what some code is doing
 - point out things the developer may have overlooked
 - expose bugs early on, mitigating headaches down the road
 - ensure product quality and user satisfaction
 - lower the costs of producing and maintaining an application   
    
Developers, myself included, typically dread writing tests as they seem like unnecessary busy-work. If an application works it works right? While it's easy to take that route, any experienced developer will tell you that putting in the extra work to test your code will only benefit you in the future.