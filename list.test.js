
let templist = require('./classList');//passing the module

test("Array parameter is pushed", () => {
    templist.add("name");
    expect(templist.get(0) == "name").toBeTruthy();
    templist.empty();
});
test("size of array increases", () => {
    templist.add("name");
    expect(templist.size() == 1).toBeTruthy();
    templist.empty();
});
test("Can get a speciic index",()=>{
    templist.add("name");
    templist.add("name2");
    templist.add("name3");
    expect(templist.get(1)=="name2").toBeTruthy();
    templist.empty();
})
test("Can empty list with the empty method",()=>{
    templist.add("name");
    templist.add("name2");
    templist.add("name3");
    templist.empty();
    expect(templist.size()==0).toBeTruthy();
})
test("Editing and index value", () => {
    templist.add("name");
    templist.edit("name2", 0);
    expect(templist.get(0) === "name2").toBeTruthy();
    templist.empty();
});

test("Deleting at an index is possible", () => {
    templist.add("name");
    templist.add("name2");
    templist.add("name3");
    templist.delete(2);
    expect(templist.size()).toBe(2);
    templist.empty();
});

test("Value of the end of list", () => {
    templist.add("name");
    templist.add("name2");
    templist.add("name3");
    expect(templist.end() === "name3").toBeTruthy();
    templist.empty();
});