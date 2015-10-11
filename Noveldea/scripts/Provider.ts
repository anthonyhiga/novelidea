/**
 *  Copyright: Third Party Software 2015(c)
 */
import dm = require("./DataModel");

export module Provider {
    export function initialize() {
        ChapterProvider.singleton = new ChapterProvider();
        CharacterProvider.singleton = new CharacterProvider();
        NoteProvider.singleton = new NoteProvider();
        PropProvider.singleton = new PropProvider();
        SceneProvider.singleton = new SceneProvider();
    }

    export class BaseProvider<T> {
        private cache = {};

        public get(id: string): T {
            return <T> this.cache[id];
        }

        public put(value: dm.DataModel.Entity) {
            return this.cache[value.id] = value;
        }

        public list(sortBy: string, acending: boolean): T[] {
            var result: T[] = [];
            for (var id in this.cache) {
                result.push(this.cache[id]);
            }
            return result;
        }
    }

    export class PropProvider extends BaseProvider<dm.DataModel.Prop> {
        static singleton: PropProvider;

        constructor() {
            super();
            var builder: dm.DataModel.PropBuilder = new dm.DataModel.PropBuilder();
            this.put(builder.description("hello world").build());
            this.put(builder.description("goodbye world").build());
        }
    }

    export class SceneProvider extends BaseProvider<dm.DataModel.Scene> {
        static singleton: SceneProvider;

        constructor() {
            super();
            var builder: dm.DataModel.SceneBuilder = new dm.DataModel.SceneBuilder();
            this.put(builder.prose("hello world").build());
            this.put(builder.prose("goodbye world").build());
        }
    }

    export class NoteProvider extends BaseProvider<dm.DataModel.Note> {
        static singleton: NoteProvider;

        constructor() {
            super();
            var builder: dm.DataModel.NoteBuilder = new dm.DataModel.NoteBuilder();
            this.put(builder.prose("hello world").build());
            this.put(builder.prose("goodbye world").build());
        }
    }

    export class CharacterProvider extends BaseProvider<dm.DataModel.Character> {
        static singleton: CharacterProvider;

        constructor() {
            super();
            var builder: dm.DataModel.CharacterBuilder = new dm.DataModel.CharacterBuilder();
            this.put(builder.fullName("hello world").description("RAIN!!!!").build());
            this.put(builder.fullName("goodbye world").description("FAV!!!!").build());
        }
    }

    export class ChapterProvider extends BaseProvider<dm.DataModel.Chapter> {
        static singleton: ChapterProvider;

        constructor() {
            super();
            var builder: dm.DataModel.ChapterBuilder = new dm.DataModel.ChapterBuilder();
            this.put(builder.title("hello world").description("RAIN!!!!").build());
            this.put(builder.title("goodbye world").description("FAV!!!!").build());
        }
    }
}