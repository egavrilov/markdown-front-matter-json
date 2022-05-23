const yaml = require('js-yaml');

function matter(input) {
    const parts = input.toString().split(/---\n/g)
    const hasFrontMatter = parts.length >= 3;

    if (!hasFrontMatter) { return { content: input.toString()}; }

    const frontMatterRaw = parts[1];

    return {
        data: yaml.load(frontMatterRaw),
        content: parts[2]
    }
}
module.exports = {
    matter
}