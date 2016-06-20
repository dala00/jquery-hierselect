# jquery-hierselect
Simple jquery hierSelect plugin

## Install

just load jquery.hierselect.js

## Usage

You need to write no script. Just html tags.

```html
<!-- parent -->
<select id="parent" data-hier-target="#child" data-hier-name="parent-id">
<option value="1">Fruit</option>
<option value="2">Animal</option>
</select>

<!-- child -->
<select id="child">
<option></option><!-- you can use empty option -->
<option value="1" data-parent-id="1">Apple</option>
<option value="2" data-parent-id"=1">Orange</option>
<option value="3" data-parent-id="2">Dog</option>
<option value="4" data-parent-id"=2">Cat</option>
</select>
```
