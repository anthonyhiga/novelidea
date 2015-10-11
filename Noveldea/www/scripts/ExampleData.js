define(["require", "exports", "./DataModel"], function (require, exports, dm) {
    var ExampleData;
    (function (ExampleData) {
        function getChapters() {
            var builder = new dm.DataModel.ChapterBuilder();
            return [
                builder.title("hello world").description("RAIN!!!!").id("my id").build(),
                builder.title("goodbye world").description("THUNDER!!!!").id("my id2").build(),
            ];
        }
        ExampleData.getChapters = getChapters;
    })(ExampleData = exports.ExampleData || (exports.ExampleData = {}));
});
//# sourceMappingURL=ExampleData.js.map