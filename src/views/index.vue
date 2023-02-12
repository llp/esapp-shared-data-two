<template>
  <div class="es-sdk-root-css">
    <title class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <div class="es-sdk-content-row-css">
        <text text="Boolean:"></text>
        <text :text="booleanValue"></text>
        <text text="Int:"></text>
        <text :text="intValue"></text>
        <text text="Long:"></text>
        <text :text="longValue"></text>
        <text text="String:"></text>
        <text :text="stringValue"></text>
        <text text="Array:"></text>
        <text :text="arrayValue"></text>
        <text text="Map:"></text>
        <text :text="mapValue"></text>
      </div>
      <div class="es-sdk-content-divider-css"/>
      <div class="es-sdk-content-row-css">
        <text-button text="getBoolean" @onButtonClicked="onGetBooleanButtonClicked"/>
        <text-button text="getInt" @onButtonClicked="onGetIntButtonClicked"/>
        <text-button text="getLong" @onButtonClicked="onGetLongButtonClicked"/>
        <text-button text="getString" @onButtonClicked="onGetStringButtonClicked"/>
        <text-button text="getArray" @onButtonClicked="onGetArrayButtonClicked"/>
        <text-button text="getMap" @onButtonClicked="onGetMapButtonClicked"/>
      </div>
      <div class="es-sdk-content-row-css">
        <text-button text="putBoolean" @onButtonClicked="onPutBooleanButtonClicked"/>
        <text-button text="putInt" @onButtonClicked="onPutIntButtonClicked"/>
        <text-button text="putLong" @onButtonClicked="onPutLongButtonClicked"/>
        <text-button text="putString" @onButtonClicked="onPutStringButtonClicked"/>
        <text-button text="putArray" @onButtonClicked="onPutArrayButtonClicked"/>
        <text-button text="putMap" @onButtonClicked="onPutMapButtonClicked"/>
      </div>
      <div class="es-sdk-content-divider-css"/>
      <div class="es-sdk-content-row-css">
        <text text="SharedBoolean:"></text>
        <text :text="booleanSharedValue"></text>
        <text text="SharedInt:"></text>
        <text :text="intSharedValue"></text>
        <text text="SharedLong:"></text>
        <text :text="longSharedValue"></text>
        <text text="SharedString:"></text>
        <text :text="stringSharedValue"></text>
        <text text="SharedArray:"></text>
        <text :text="arraySharedValue"></text>
        <text text="SharedMap:"></text>
        <text :text="mapSharedValue"></text>
      </div>
      <div class="es-sdk-content-divider-css"/>
      <div class="es-sdk-content-row-css">
        <text-button text="getSharedBoolean" @onButtonClicked="onGetSharedBooleanButtonClicked"/>
        <text-button text="getSharedInt" @onButtonClicked="onGetSharedIntButtonClicked"/>
        <text-button text="getSharedLong" @onButtonClicked="onGetSharedLongButtonClicked"/>
        <text-button text="getSharedString" @onButtonClicked="onGetSharedStringButtonClicked"/>
        <text-button text="getSharedArray" @onButtonClicked="onGetSharedArrayButtonClicked"/>
        <text-button text="getSharedMap" @onButtonClicked="onGetSharedMapButtonClicked"/>
      </div>
      <div class="es-sdk-content-row-css">
        <text-button text="putSharedBoolean" @onButtonClicked="onPutSharedBooleanButtonClicked"/>
        <text-button text="putSharedInt" @onButtonClicked="onPutSharedIntButtonClicked"/>
        <text-button text="putSharedLong" @onButtonClicked="onPutSharedLongButtonClicked"/>
        <text-button text="putSharedString" @onButtonClicked="onPutSharedStringButtonClicked"/>
        <text-button text="putSharedArray" @onButtonClicked="onPutSharedArrayButtonClicked"/>
        <text-button text="putSharedMap" @onButtonClicked="onPutSharedMapButtonClicked"/>
      </div>
    </div>
  </div>
</template>

<script>
import {ESPage, ESToast} from "@extscreen/es-core";
import {ESSharedDataManager} from "@extscreen/es-shared-data";
import error from "@/views/error";

export default {
  name: '共享数据测试二',
  mixins: [ESPage],
  data() {
    return {
      booleanValue: false,
      intValue: 0,
      longValue: 0,
      stringValue: '',
      arrayValue: [],
      mapValue: {},

      booleanSharedValue: false,
      intSharedValue: 0,
      longSharedValue: 0,
      stringSharedValue: '',
      arraySharedValue: [],
      mapSharedValue: {},

      sharedPackageName: "es.test.data.shared.one",
    };
  },
  methods: {
    onESCreate(params) {
      ESSharedDataManager.init().then(() => {
        },
        error => {
        })
    },
    //--------------------------------------------------------------------------------------
    onGetBooleanButtonClicked() {
      ESSharedDataManager.getBoolean("booleanKey", false)
        .then(value => {
            this.booleanValue = value;
            ESToast.showToast("getBoolean:" + value);
          },
          error => {
            ESToast.showToast("getBoolean error");
          }
        );
    },
    onGetIntButtonClicked() {
      ESSharedDataManager.getInt("intKey", 0)
        .then(value => {
            this.intValue = value;
            ESToast.showToast("getInt:" + value);
          },
          error => {
            ESToast.showToast("getInt error");
          }
        );
    },
    onGetLongButtonClicked() {
      ESSharedDataManager.getLong("longKey", 0)
        .then(value => {
            this.longValue = value;
            ESToast.showToast("getLong:" + value);
          },
          error => {
            ESToast.showToast("getLong error");
          }
        );
    },
    onGetStringButtonClicked() {
      ESSharedDataManager.getString("stringKey", "")
        .then(value => {
            this.stringValue = value;
            ESToast.showToast("getString:" + value);
          },
          error => {
            ESToast.showToast("getString error");
          }
        );
    },
    onGetArrayButtonClicked() {
      ESSharedDataManager.getArray("arrayKey", [])
        .then(value => {
            ESToast.showToast("getArray:" + value);
            this.arrayValue = value;
          },
          error => {
            ESToast.showToast("getArray error");
          }
        );
    },
    onGetMapButtonClicked() {
      ESSharedDataManager.getMap("mapKey", {})
        .then(value => {
            this.mapValue = value;
          },
          error => {

          }
        );
    },
    //--------------------------------------------------------------------------------------
    onPutBooleanButtonClicked() {
      ESSharedDataManager.putBoolean("booleanKey", true, 33)
        .then(value => {
            ESToast.showToast("putBoolean success");
          },
          error => {
            ESToast.showToast("putBoolean error");
          }
        );
    },
    onPutIntButtonClicked() {
      ESSharedDataManager.putInt("intKey", 10, 33)
        .then(value => {
            ESToast.showToast("putInt success");
          },
          error => {
            ESToast.showToast("putInt error");
          }
        );
    },
    onPutLongButtonClicked() {
      ESSharedDataManager.putLong("longKey", 100, 33)
        .then(value => {
            ESToast.showToast("putLong success");
          },
          error => {
            ESToast.showToast("putLong error");
          }
        );
    },
    onPutStringButtonClicked() {
      ESSharedDataManager.putString("stringKey", "hello", 33)
        .then(value => {
            ESToast.showToast("putString success");
          },
          error => {
            ESToast.showToast("putString error");
          }
        );
    },
    onPutArrayButtonClicked() {
      ESSharedDataManager.putArray("arrayKey", [33], 1)
        .then(value => {
            ESToast.showToast("putArray success");
          },
          error => {
            ESToast.showToast("putArray error");
          }
        );
    },
    onPutMapButtonClicked() {
      ESSharedDataManager.putMap("mapKey", {mapIntKey: 33}
        , 1)
        .then(value => {
            ESToast.showToast("putMap success");
          },
          error => {
            ESToast.showToast("putMap error");
          }
        );
    },
    //-----------------------------------------------------------------
    onGetSharedBooleanButtonClicked() {
      ESSharedDataManager.getSharedBoolean(this.sharedPackageName, "booleanKey", false)
        .then(value => {
            this.booleanSharedValue = value;
          },
          error => {

          }
        );
    },
    onGetSharedIntButtonClicked() {
      ESSharedDataManager.getSharedInt(this.sharedPackageName, "intKey", 0)
        .then(value => {
            this.intSharedValue = value;
          },
          error => {

          }
        );
    },
    onGetSharedLongButtonClicked() {
      ESSharedDataManager.getSharedLong(this.sharedPackageName, "longKey", 0)
        .then(value => {
            this.longSharedValue = value;
          },
          error => {

          }
        );
    },
    onGetSharedStringButtonClicked() {
      ESSharedDataManager.getSharedString(this.sharedPackageName, "stringKey", "")
        .then(value => {
            this.stringSharedValue = value;
          },
          error => {

          }
        );
    },
    onGetSharedArrayButtonClicked() {
      ESSharedDataManager.getSharedArray(this.sharedPackageName, "arrayKey", [])
        .then(value => {
            this.arraySharedValue = value;
          },
          error => {

          }
        );
    },
    onGetSharedMapButtonClicked() {
      ESSharedDataManager.getSharedMap(this.sharedPackageName, "mapKey", {})
        .then(value => {
            this.mapSharedValue = value;
          },
          error => {

          }
        );
    },
    //--------------------------------------------------------------------------------------
    onPutSharedBooleanButtonClicked() {
      ESSharedDataManager.putSharedBoolean(this.sharedPackageName, "booleanKey", false)
        .then(value => {
            ESToast.showToast("putSharedBoolean success");
          },
          error => {
            ESToast.showToast("putSharedBoolean error");
          }
        );

    },
    onPutSharedIntButtonClicked() {
      ESSharedDataManager.putSharedInt(this.sharedPackageName, "intKey", 22)
        .then(value => {
            ESToast.showToast("putSharedInt success");
          },
          error => {
            ESToast.showToast("putSharedInt error");
          }
        );
    },
    onPutSharedLongButtonClicked() {
      ESSharedDataManager.putSharedLong(this.sharedPackageName, "longKey", 22)
        .then(value => {
            ESToast.showToast("putSharedLong success");
          },
          error => {
            ESToast.showToast("putSharedLong error");
          }
        );
    },
    onPutSharedStringButtonClicked() {
      ESSharedDataManager.putSharedString(this.sharedPackageName, "stringKey", "22")
        .then(value => {
            ESToast.showToast("putSharedString success");
          },
          error => {
            ESToast.showToast("putSharedString error");
          }
        );
    },
    onPutSharedArrayButtonClicked() {
      ESSharedDataManager.putSharedArray(this.sharedPackageName, "arrayKey", [22])
        .then(value => {
            ESToast.showToast("putSharedArray success");
          },
          error => {
            ESToast.showToast("putSharedArray error");
          }
        );
    },
    onPutSharedMapButtonClicked() {
      ESSharedDataManager.putSharedMap(this.sharedPackageName, "mapKey", {xxxKey: 22})
        .then(value => {
            ESToast.showToast("putSharedMap success");
          },
          error => {
            ESToast.showToast("putSharedMap error");
          }
        );
    },
  }
};
</script>

<style>
</style>
