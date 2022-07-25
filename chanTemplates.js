"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const completionItemBuilder_1 = require("../completionItemBuilder");
const baseTemplates_1 = require("./baseTemplates");
class RchTemplate extends baseTemplates_1.BaseExpressionTemplate {
    constructor() {
        super();
    }
    buildCompletionItem(code, position) {
        return completionItemBuilder_1.CompletionItemBuilder
            .create("rch", code)
            .description(`<- expr`)
            .replace('<- {{expr}}$0', position, true)
            .build();
    }
}
exports.RchTemplate = RchTemplate;
class WchTemplate extends baseTemplates_1.BaseExpressionTemplate {
    constructor() {
        super();
    }
    buildCompletionItem(code, position) {
        return completionItemBuilder_1.CompletionItemBuilder
            .create("wch", code)
            .description(`expr <-`)
            .replace('{{expr}} <- $0', position, true)
            .build();
    }
}
exports.WchTemplate = WchTemplate;
exports.build = () => [
    new RchTemplate(),
    new WchTemplate()
];
//# sourceMappingURL=varTemplates.js.map
