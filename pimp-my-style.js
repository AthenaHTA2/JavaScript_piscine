/*
Instructions
Check out that button on the HTML page:

<button class="button">pimp my style</div>
For now, it's only a lonely, basic and sad element. let's pimp it up.

On each click on the page, a function pimp is triggered. Write the body of that function so that the button's class is altered:

From the data file provided, add each of the styles array elements as classes, in order.
When the end of the array is reached, remove the classes in a FIFO fashion.
While removing classes, toggle the unpimp class on. And toggle it off again while adding classes.
Example for a styles array with only 3 classes:

["one", "two", "three"]
Page load --> <button class="button"></div>

...adding
Click 1 --> <button class="button one"></div>
Click 2 --> <button class="button one two"></div>

...toggling `unpimp`
Click 3 --> <button class="button one two three unpimp"></div>

...and removing backwards
Click 4 --> <button class="button one two unpimp"></div>
Click 5 --> <button class="button one unpimp"></div>
Click 6 --> <button class="button"></div>
*/

export function pimp() {
  let numStyles = styles.length;
  for (let i = 0; i < numStyles; i++) {
    button.classList.add("styles[`${i}`]");
  }
 
  div.classList.add("anotherclass");
  div.classList.remove("foo");
  div.classList.toggle("visible");
}
