var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "./DataModel"], function (require, exports, dm) {
    var Provider;
    (function (Provider) {
        function initialize() {
            ChapterProvider.singleton = new ChapterProvider();
        }
        Provider.initialize = initialize;
        var BaseProvider = (function () {
            function BaseProvider() {
                this.cache = {};
            }
            BaseProvider.prototype.get = function (id) {
                return this.cache[id];
            };
            BaseProvider.prototype.put = function (value) {
                return this.cache[value.id] = value;
            };
            BaseProvider.prototype.list = function (sortBy, acending) {
                var result = [];
                for (var id in this.cache) {
                    result.push(this.cache[id]);
                }
                return result;
            };
            return BaseProvider;
        })();
        Provider.BaseProvider = BaseProvider;
        var ChapterProvider = (function (_super) {
            __extends(ChapterProvider, _super);
            function ChapterProvider() {
                _super.call(this);
                var builder = new dm.DataModel.ChapterBuilder();
                this.put(builder.title("hello world").description("RAIN!!!!").build());
                this.put(builder.title("goodbye world").description("FAV!!!!").build());
            }
            return ChapterProvider;
        })(BaseProvider);
        Provider.ChapterProvider = ChapterProvider;
    })(Provider = exports.Provider || (exports.Provider = {}));
});
//# sourceMappingURL=Provider.js.map