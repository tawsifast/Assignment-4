1.	What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans : 
  getElementById :    একটা নির্দিষ্ট id দিয়ে element ধরে। এবং একটা single element return করে। id unique হতে হবে
  getElementsByClassName : একটা class name দিয়ে সব element ধরে। একই class name একাধিক হতে পারে
  querySelector : CSS selector দিয়ে  container or div or parent  এর first matching element ধরে। এটা id/class name/semantic tag দিয়েও ধরা যজয়াই
  querySelectorAll  : CSS selector দিয়ে সব matching element ধরে। same name  multiple হলেও ধরে

2.  How do you create and insert a new element into the DOM?
Ans:
  প্রথমে document.createElement() ব্যবহার করে একটি নতুন element তৈরি করব। এরপর element এর ভেতরের attribute, add করব।
  সবশেষে appendChild() করব ।

3. What is Event Bubbling? And how does it work?
Ans:
   যেখানে  click করব সেখান থেকে পরবর্তীতে উপরের parent এর কাছে যেতে থাকে এভাবে parent এর parent -> grandparent এর কাছে যেতে থাকে এভাবেই event bubbling ঘটে
   
4. What is Event Delegation in JavaScript? Why is it useful?
Ans:
  Event Delegation এর মাধ্যমে আলাদা আলাদা child element এ event listener না বসিয়ে,
  তাদের parent element e event listener বসাই এবং event bubbling ব্যবহার করে child element গুলো control করি।
  প্রতিটি child element এ আলাদা event listener বসানোর দরকার হয় না। একটি parent listener দিয়েই অনেক element handle করা যায়।

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans:
   preventDefault() : কোনো element এর default browser behaviour বন্ধ করে। অর্থাৎ browser যে কাজটা স্বাভাবিকভাবে করত, সেটা বন্ধ করে দেয়।
  stopPropagation() : event bubbling বন্ধ করে।