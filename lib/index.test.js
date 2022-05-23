const fs = require('fs');
const { matter } = require('./index');

describe('frontmatter parsing', () => {
    const emptyMD = fs.readFileSync(`${__dirname}/../fixtures/empty.md`, 'utf-8');
    const frontMatterMD = fs.readFileSync(`${__dirname}/../fixtures/front-matter.md`, 'utf-8');
    const noFrontMD = fs.readFileSync(`${__dirname}/../fixtures/no-front.md`, 'utf-8');

    test('should return empty content for empty md', () => {
        expect(matter(emptyMD)).toEqual({content: ''})
    });

    
    test('should return only content for no-front-matter md', () => {
        expect(matter(noFrontMD)).toEqual({content: '<h1>Hello world!</h1>\n'})
    });

    
    test('should return front-matter and content for front-matter md', () => {
        expect(matter(frontMatterMD)).toEqual({
            frontmatter: {
              slug: "home",
              title: "Hello",
            },
            content: '<h1>Hello world!</h1>'
        })
    });
})