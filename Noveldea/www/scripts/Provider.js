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
            CharacterProvider.singleton = new CharacterProvider();
            NoteProvider.singleton = new NoteProvider();
            PropProvider.singleton = new PropProvider();
            SceneProvider.singleton = new SceneProvider();
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
        var PropProvider = (function (_super) {
            __extends(PropProvider, _super);
            function PropProvider() {
                _super.call(this);
                var builder = new dm.DataModel.PropBuilder();
                this.put(builder.description("hello world").build());
                this.put(builder.description("goodbye world").build());
            }
            return PropProvider;
        })(BaseProvider);
        Provider.PropProvider = PropProvider;
        var SceneProvider = (function (_super) {
            __extends(SceneProvider, _super);
            function SceneProvider() {
                _super.call(this);
                var builder = new dm.DataModel.SceneBuilder();
                this.put(builder.prose("hello world").build());
                this.put(builder.prose("goodbye world").build());
            }
            return SceneProvider;
        })(BaseProvider);
        Provider.SceneProvider = SceneProvider;
        var NoteProvider = (function (_super) {
            __extends(NoteProvider, _super);
            function NoteProvider() {
                _super.call(this);
                var builder = new dm.DataModel.NoteBuilder();
                this.put(builder.prose("hello world").build());
                this.put(builder.prose("goodbye world").build());
            }
            return NoteProvider;
        })(BaseProvider);
        Provider.NoteProvider = NoteProvider;
        var CharacterProvider = (function (_super) {
            __extends(CharacterProvider, _super);
            function CharacterProvider() {
                _super.call(this);
                var builder = new dm.DataModel.CharacterBuilder();
                this.put(builder.fullName("hello world").description("RAIN!!!!").build());
                this.put(builder.fullName("goodbye world").description("FAV!!!!").build());
            }
            return CharacterProvider;
        })(BaseProvider);
        Provider.CharacterProvider = CharacterProvider;
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