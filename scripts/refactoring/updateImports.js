const { Project } = require("ts-morph");

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const isAbsolute = (value) => {
    const layers = ['app', 'entities', 'features', 'pages', 'shared', 'widgets'];
    return layers.some(layer => value.startsWith(layer));
}

const files = project.getSourceFiles();

files.forEach(file => {
    const importDeclarations = file.getImportDeclarations();
    importDeclarations.forEach(importDeclaration => {
        const value = importDeclaration.getModuleSpecifierValue();

        if(isAbsolute(value)) {
            importDeclaration.setModuleSpecifier(`@/${value}`);
        }
    });
});

project.save();