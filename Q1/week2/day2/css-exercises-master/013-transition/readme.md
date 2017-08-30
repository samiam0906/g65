# 013-Transition
***

## Goal: On cursor hover, a box will acquire a box-shadow.

*Instructions:*

Now for something a little different: the `:hover` pseudo-class. When a user hovers over an element,
if that element has the `:hover` pseudo-class defined in the stylesheet, it will take on the associated properties of that pseudo-class.

For example:

```
<!-- css -->

.box {
  background-color: red;
}

.box:hover {
  background-color: blue;
}


```  

In this example, the box will have a red background color until the user hovers over it, whereupon it will change to blue. You can use this for other properties as well, including box-shadow. Additional pseudo-classes include `:active`, `:link`, and `:visited`, among others.


In this example , what if you want the transition from red to blue to happen over the course of 0.5 seconds? We can use a `transition`:

```
.box {
  background-color: red;
  transition: 0.5s;
}
```

We can get more specific in how we want `transition` to behave by using additional property values:

```
.box {
    background-color: red;
    transition: <property> <duration> <timing-function> <delay>;
}

```

To learn more about `transition` and to check out how to use these property values, visit this link:

[https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions]
