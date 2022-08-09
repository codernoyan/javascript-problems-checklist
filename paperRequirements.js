//calculate the paper requirements for print of 3 books

function paperRequirements(book1Quantity, book2Quantity, book3Quantity) {
    // error handling
    if (typeof book1Quantity !== 'number' || typeof book2Quantity !== 'number' || typeof book3Quantity !== 'number') {
        return 'Please enter a valid number'
    }
    //book page requirements
    const book1Page = 100;
    const book2Page = 200;
    const book3Page = 300;
    // total book pages
    const paperRequiredForBook1 = book1Quantity * book1Page;
    const paperRequiredForBook2 = book2Quantity * book2Page;
    const paperRequiredForBook3 = book3Quantity * book3Page;

    const totalPage = paperRequiredForBook1 + paperRequiredForBook2 + paperRequiredForBook3;
    return totalPage;
}

const totalPageRequired = paperRequirements(1, 5, 1);
console.log(totalPageRequired);