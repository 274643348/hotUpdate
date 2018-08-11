var UpdatePanel = require('../UI/UpdatePanel');

// Custom manifest removed the following assets:
// 1. res/raw-assets/textures/UI/chat/button_orange.png
// 2. res/raw-assets/textures/UI/chat/gb_inputbox.png
// So when custom manifest used, you should be able to find them in downloaded remote assets
var customManifestStr = JSON.stringify({
    "version": "1.0.0",
    "packageUrl": "http://172.16.0.186:8000/",
    "remoteManifestUrl": "http://172.16.0.186:8000/project.manifest",
    "remoteVersionUrl": "http://172.16.0.186:8000/version.manifest",
    "assets": {
      "src/jsb_polyfill.js": {
        "size": 1032310,
        "md5": "5026bed056a2b6eec906a05323707020"
      },
      "src/project.dev.js": {
        "size": 98052,
        "md5": "6dcb115ecf4ee2f3793b8a503e272c70"
      },
      "src/settings.js": {
        "size": 8277,
        "md5": "6bf05974a078f4a27cde6b14efc0d2ad"
      },
      "res/import/01/01b7b60cd.json": {
        "size": 10137,
        "md5": "bb2dc5d4cbff5b2acc38f635557ca7fc"
      },
      "res/import/0c/0cd5de143.json": {
        "size": 71312,
        "md5": "5f1ede597224588c28d6c410b4b49876"
      },
      "res/import/0d/0dc6a4e59.json": {
        "size": 13873,
        "md5": "90bb008cd84cdf50ec4e843199c5635e"
      },
      "res/raw-assets/font/poker_number.png": {
        "size": 24298,
        "md5": "920f7e4f3262a7ee74d844e114b76dd3"
      },
      "res/raw-assets/project.manifest": {
        "size": 10217,
        "md5": "e9670536adba6670c12f19869a91178e"
      },
      "res/raw-assets/sfx/bgm2.mp3": {
        "size": 971644,
        "md5": "2b26f952edcbbf7180b95b6eedf008b8"
      },
      "res/raw-assets/sfx/button.mp3": {
        "size": 3179,
        "md5": "b5c79e8cd7a22459f08a8ac5005d7302"
      },
      "res/raw-assets/textures/UI/chat/button_orange.png": {
        "size": 18969,
        "md5": "96e39d211db65235f425ba3957b723b0"
      },
      "res/raw-assets/textures/UI/chat/gb_inputbox.png": {
        "size": 2548,
        "md5": "c3b93af99c4a65d85ad414e8e46dbfd5"
      },
      "res/raw-assets/textures/UI/lobby/bg_changjing.png": {
        "size": 634171,
        "md5": "b2938324c9e980f2d13b3354c2cb7d9a"
      },
      "res/raw-assets/textures/UI/lobby/bg_gold.png": {
        "size": 2406,
        "md5": "412e43e4508c6ebfec065257c34cb4f8"
      },
      "res/raw-assets/textures/UI/lobby/button_jjc.png": {
        "size": 94313,
        "md5": "d7468cc4b51786f34a7fbf97e8d38133"
      },
      "res/raw-assets/textures/UI/lobby/button_ksks.png": {
        "size": 82257,
        "md5": "14b97475c07fa9b784b8f0da41bd72d4"
      },
      "res/raw-assets/textures/UI/lobby/button_zbc.png": {
        "size": 91423,
        "md5": "c213010c9ccbaf821b18cef02d9c84bb"
      },
      "res/raw-assets/textures/UI/lobby/icon_back.png": {
        "size": 2209,
        "md5": "51f668c4da94cfc1125344a7061e0eab"
      },
      "res/raw-assets/textures/UI/lobby/icon_diamond.png": {
        "size": 6911,
        "md5": "02066a8696d6c34a6e32a8846bbf6f48"
      },
      "res/raw-assets/textures/UI/lobby/icon_gold_big.png": {
        "size": 6417,
        "md5": "1be03ff8144f505d4e6562faf3264a35"
      },
      "res/raw-assets/textures/UI/lobby/icon_gold_small.png": {
        "size": 3963,
        "md5": "da853e9296cf85121e4eec0f5756c021"
      },
      "res/raw-assets/textures/UI/lobby/icon_plus.png": {
        "size": 1530,
        "md5": "12be6491e225c4234438a84d3913cd43"
      },
      "res/raw-assets/textures/UI/lobby/icon_rule.png": {
        "size": 3840,
        "md5": "8b82e5d6d5fe51c9ad096d8d4c6bddec"
      },
      "res/raw-assets/textures/UI/lobby/icon_set.png": {
        "size": 4665,
        "md5": "8db46ab22d0fc685f4972cd8a0953ecd"
      },
      "res/raw-assets/textures/UI/lobby/trophy_1.png": {
        "size": 11935,
        "md5": "56411fa9d23482fa64fb3764fe059f4c"
      },
      "res/raw-assets/textures/UI/lobby/trophy_2.png": {
        "size": 10982,
        "md5": "c02f78c70d2fbd2fb901836c7a249941"
      },
      "res/raw-assets/textures/UI/lobby/trophy_3.png": {
        "size": 11636,
        "md5": "536e13684a45e67125d81c0c730e6a0d"
      },
      "res/raw-assets/textures/UI/lobby/user-image.png": {
        "size": 25205,
        "md5": "0e91841504935c436db7663447878874"
      },
      "res/raw-assets/textures/UI/lobby/user-image2.png": {
        "size": 8755,
        "md5": "b314bc1da899acf6bb902756276a7be0"
      },
      "res/raw-assets/textures/UI/lobby/user-image3.png": {
        "size": 10878,
        "md5": "95ba67e36f2fbeea0040c002790c5eb9"
      },
      "res/raw-assets/textures/UI/lobby/user-image4.png": {
        "size": 9638,
        "md5": "a80c515fbe62950289ad75042af49136"
      },
      "res/raw-assets/textures/UI/lobby/user-image5.png": {
        "size": 9754,
        "md5": "630ab15d7099e242903abd676386f9ae"
      },
      "res/raw-assets/textures/UI/lobby/user-image6.png": {
        "size": 10370,
        "md5": "33eb7b1f34626ee50d145b1dd731b7e4"
      },
      "res/raw-assets/textures/UI/new/Stroke_photo.png": {
        "size": 1641,
        "md5": "7f0c157f9b8e573b2c33f1d2dd05619a"
      },
      "res/raw-assets/textures/UI/new/Stroke_photo_oneself.png": {
        "size": 10422,
        "md5": "47c8833c1116348aff1f0be759af26f1"
      },
      "res/raw-assets/textures/UI/new/bg_icon.png": {
        "size": 2711,
        "md5": "00efc2c8a51636ad02ecbdb63a44a812"
      },
      "res/raw-assets/textures/UI/new/bg_rankinglist.png": {
        "size": 3765,
        "md5": "60ab4dfb6d3e8a147753b5665dcba27a"
      },
      "res/raw-assets/textures/UI/new/bg_xiamian.png": {
        "size": 3782,
        "md5": "bf63db91cb963e5b8d9e5b243b9cd5e9"
      },
      "res/raw-assets/textures/UI/new/fengexian.png": {
        "size": 15379,
        "md5": "54c771446091520afda52e4b747975a5"
      },
      "res/raw-assets/textures/UI/new/icon_back.png": {
        "size": 2290,
        "md5": "740ebade1729539882383360b2066d36"
      },
      "res/raw-assets/textures/UI/new/icon_boy.png": {
        "size": 2187,
        "md5": "d9eec68e01aeefc27e5155a23eb2b362"
      },
      "res/raw-assets/textures/UI/new/rankinglist_bg.png": {
        "size": 1627,
        "md5": "f0e6c61964a14fd767327d66828a5fcf"
      },
      "res/raw-assets/textures/UI/new/rankinglist_title.png": {
        "size": 7380,
        "md5": "fc827115473cdccbbed73848eec9c95f"
      },
      "res/raw-assets/textures/UI/table/bg_jinbishu.png": {
        "size": 1829,
        "md5": "e3e1ef9049e7c82cbb696bc4e8cfa64b"
      },
      "res/raw-assets/textures/UI/user/circle_2.png": {
        "size": 55581,
        "md5": "bd8c7e4653b5726b4b993b8df7c55142"
      },
      "res/raw-internal/image/default_btn_disabled.png": {
        "size": 205,
        "md5": "585114884a0007b544ff1a555197eab7"
      },
      "res/raw-internal/image/default_btn_normal.png": {
        "size": 223,
        "md5": "6c31d04886c20b9ec1017a9fec425a68"
      },
      "res/raw-internal/image/default_btn_pressed.png": {
        "size": 164,
        "md5": "8b648ba0a453ea34baefaaea74eda6f7"
      },
      "res/raw-internal/image/default_progressbar.png": {
        "size": 83,
        "md5": "748a3314d28f2e3bdb0b527b9c8e5ba7"
      },
      "res/raw-internal/image/default_progressbar_bg.png": {
        "size": 83,
        "md5": "7bfd0a9c31e62f2b2f3f52a051700a31"
      }
    },
    "searchPaths": []
  });

cc.Class({
    extends: cc.Component,

    properties: {
        panel: UpdatePanel,
        manifestUrl: cc.RawAsset,
        updateUI: cc.Node,
        _updating: false,
        _canRetry: false,
        _storagePath: ''
    },

    checkCb: function (event) {
        cc.log('Code: ' + event.getEventCode());
        switch (event.getEventCode())
        {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                this.panel.info.string = "No local manifest file found, hot update skipped.";
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                this.panel.info.string = "Fail to download manifest file, hot update skipped.";
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                this.panel.info.string = "Already up to date with the latest remote version.";
                break;
            case jsb.EventAssetsManager.NEW_VERSION_FOUND:
                this.panel.info.string = 'New version found, please try to update.';
                this.panel.checkBtn.active = false;
                this.panel.fileProgress.progress = 0;
                this.panel.byteProgress.progress = 0;
                break;
            default:
                return;
        }
        
        cc.eventManager.removeListener(this._checkListener);
        this._checkListener = null;
        this._updating = false;
    },

    updateCb: function (event) {
        var needRestart = false;
        var failed = false;
        switch (event.getEventCode())
        {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                this.panel.info.string = 'No local manifest file found, hot update skipped.';
                failed = true;
                break;
            case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                this.panel.byteProgress.progress = event.getPercent();
                this.panel.fileProgress.progress = event.getPercentByFile();

                this.panel.fileLabel.string = event.getDownloadedFiles() + ' / ' + event.getTotalFiles();
                this.panel.byteLabel.string = event.getDownloadedBytes() + ' / ' + event.getTotalBytes();

                var msg = event.getMessage();
                if (msg) {
                    this.panel.info.string = 'Updated file: ' + msg;
                    // cc.log(event.getPercent()/100 + '% : ' + msg);
                }
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                this.panel.info.string = 'Fail to download manifest file, hot update skipped.';
                failed = true;
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                this.panel.info.string = 'Already up to date with the latest remote version.';
                failed = true;
                break;
            case jsb.EventAssetsManager.UPDATE_FINISHED:
                this.panel.info.string = 'Update finished. ' + event.getMessage();
                needRestart = true;
                break;
            case jsb.EventAssetsManager.UPDATE_FAILED:
                this.panel.info.string = 'Update failed. ' + event.getMessage();
                this.panel.retryBtn.active = true;
                this._updating = false;
                this._canRetry = true;
                break;
            case jsb.EventAssetsManager.ERROR_UPDATING:
                this.panel.info.string = 'Asset update error: ' + event.getAssetId() + ', ' + event.getMessage();
                break;
            case jsb.EventAssetsManager.ERROR_DECOMPRESS:
                this.panel.info.string = event.getMessage();
                break;
            default:
                break;
        }

        if (failed) {
            cc.eventManager.removeListener(this._updateListener);
            this._updateListener = null;
            this._updating = false;
        }

        if (needRestart) {
            cc.eventManager.removeListener(this._updateListener);
            this._updateListener = null;
            // Prepend the manifest's search path
            var searchPaths = jsb.fileUtils.getSearchPaths();
            var newPaths = this._am.getLocalManifest().getSearchPaths();
            console.log(JSON.stringify(newPaths));
            Array.prototype.unshift(searchPaths, newPaths);
            // This value will be retrieved and appended to the default search path during game startup,
            // please refer to samples/js-tests/main.js for detailed usage.
            // !!! Re-add the search paths in main.js is very important, otherwise, new scripts won't take effect.
            cc.sys.localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(searchPaths));
            jsb.fileUtils.setSearchPaths(searchPaths);

            cc.audioEngine.stopAll();
            cc.game.restart();
        }
    },

    loadCustomManifest: function () {
        if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
            var manifest = new jsb.Manifest(customManifestStr, this._storagePath);
            this._am.loadLocalManifest(manifest, this._storagePath);
            this.panel.info.string = 'Using custom manifest';
        }
    },
    
    retry: function () {
        if (!this._updating && this._canRetry) {
            this.panel.retryBtn.active = false;
            this._canRetry = false;
            
            this.panel.info.string = 'Retry failed Assets...';
            this._am.downloadFailedAssets();
        }
    },
    
    checkUpdate: function () {
        if (this._updating) {
            this.panel.info.string = 'Checking or updating ...';
            return;
        }
        if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
            this._am.loadLocalManifest(this.manifestUrl);
        }
        if (!this._am.getLocalManifest() || !this._am.getLocalManifest().isLoaded()) {
            this.panel.info.string = 'Failed to load local manifest ...';
            return;
        }
        this._checkListener = new jsb.EventListenerAssetsManager(this._am, this.checkCb.bind(this));
        cc.eventManager.addListener(this._checkListener, 1);

        this._am.checkUpdate();
        this._updating = true;
    },

    hotUpdate: function () {
        if (this._am && !this._updating) {
            this._updateListener = new jsb.EventListenerAssetsManager(this._am, this.updateCb.bind(this));
            cc.eventManager.addListener(this._updateListener, 1);

            if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
                this._am.loadLocalManifest(this.manifestUrl);
            }

            this._failCount = 0;
            this._am.update();
            this.panel.updateBtn.active = false;
            this._updating = true;
        }
    },
    
    show: function () {
        if (this.updateUI.active === false) {
            this.updateUI.active = true;
        }
    },

    // use this for initialization
    onLoad: function () {
        // Hot update is only available in Native build
        if (!cc.sys.isNative) {
            return;
        }
        this._storagePath = ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + 'blackjack-remote-asset');
        cc.log('Storage path for remote asset : ' + this._storagePath);

        // Setup your own version compare handler, versionA and B is versions in string
        // if the return value greater than 0, versionA is greater than B,
        // if the return value equals 0, versionA equals to B,
        // if the return value smaller than 0, versionA is smaller than B.
        this.versionCompareHandle = function (versionA, versionB) {
            cc.log("JS Custom Version Compare: version A is " + versionA + ', version B is ' + versionB);
            var vA = versionA.split('.');
            var vB = versionB.split('.');
            for (var i = 0; i < vA.length; ++i) {
                var a = parseInt(vA[i]);
                var b = parseInt(vB[i] || 0);
                if (a === b) {
                    continue;
                }
                else {
                    return a - b;
                }
            }
            if (vB.length > vA.length) {
                return -1;
            }
            else {
                return 0;
            }
        };

        // Init with empty manifest url for testing custom manifest
        this._am = new jsb.AssetsManager('', this._storagePath, this.versionCompareHandle);
        if (!cc.sys.ENABLE_GC_FOR_NATIVE_OBJECTS) {
            this._am.retain();
        }

        var panel = this.panel;
        // Setup the verification callback, but we don't have md5 check function yet, so only print some message
        // Return true if the verification passed, otherwise return false
        this._am.setVerifyCallback(function (path, asset) {
            // When asset is compressed, we don't need to check its md5, because zip file have been deleted.
            var compressed = asset.compressed;
            // Retrieve the correct md5 value.
            var expectedMD5 = asset.md5;
            // asset.path is relative path and path is absolute.
            var relativePath = asset.path;
            // The size of asset file, but this value could be absent.
            var size = asset.size;
            if (compressed) {
                panel.info.string = "Verification passed : " + relativePath;
                return true;
            }
            else {
                panel.info.string = "Verification passed : " + relativePath + ' (' + expectedMD5 + ')';
                return true;
            }
        });

        this.panel.info.string = 'Hot update is ready, please check or directly update.';

        if (cc.sys.os === cc.sys.OS_ANDROID) {
            // Some Android device may slow down the download process when concurrent tasks is too much.
            // The value may not be accurate, please do more test and find what's most suitable for your game.
            this._am.setMaxConcurrentTask(2);
            this.panel.info.string = "Max concurrent tasks count have been limited to 2";
        }
        
        this.panel.fileProgress.progress = 0;
        this.panel.byteProgress.progress = 0;
    },

    onDestroy: function () {
        if (this._updateListener) {
            cc.eventManager.removeListener(this._updateListener);
            this._updateListener = null;
        }
        if (this._am && !cc.sys.ENABLE_GC_FOR_NATIVE_OBJECTS) {
            this._am.release();
        }
    }
});
