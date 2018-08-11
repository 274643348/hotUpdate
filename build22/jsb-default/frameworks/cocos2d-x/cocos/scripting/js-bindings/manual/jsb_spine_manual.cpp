//
//  jsb_spine_manual.cpp
//  cocos2d_js_bindings
//
//  Created by James Chen on 6/14/17.
//
//

#include "jsb_spine_manual.hpp"
#include "cocos/scripting/js-bindings/jswrapper/SeApi.h"
#include "cocos/scripting/js-bindings/manual/jsb_conversions.hpp"
#include "cocos/scripting/js-bindings/manual/jsb_global.h"
#include "cocos/scripting/js-bindings/manual/jsb_helper.hpp"
#include "cocos/scripting/js-bindings/auto/jsb_cocos2dx_spine_auto.hpp"

#include "cocos2d.h"
#include "cocos/editor-support/spine/spine.h"

using namespace cocos2d;

// TrackEntry registration

se::Class* __jsb_spine_TrackEntry_class = nullptr;
se::Object* __jsb_spine_TrackEntry_proto = nullptr;

static bool jsb_spine_TrackEntry_finalize(se::State& s)
{
    CCLOGINFO("jsbindings: finalizing JS object %p (spTrackEntry)", s.nativeThisObject());
    return true;
}
SE_BIND_FINALIZE_FUNC(jsb_spine_TrackEntry_finalize)

static bool jsb_spine_TrackEntry_constructor(se::State& s)
{
    assert(false);
    return true;
}
SE_BIND_CTOR(jsb_spine_TrackEntry_constructor, __jsb_spine_TrackEntry_class, jsb_spine_TrackEntry_finalize)

static bool jsb_spine_TrackEntry_get_mixingFrom(se::State& s)
{
    spTrackEntry* cobj = (spTrackEntry*) s.nativeThisObject();
    if (cobj->mixingFrom)
    {
        bool ok = sptrackentry_to_seval(cobj->mixingFrom, &s.rval());
        SE_PRECONDITION2(ok, false, "Converting track entry failed!");
        return true;
    }
    s.rval().setNull();
    return true;
}
SE_BIND_FUNC(jsb_spine_TrackEntry_get_mixingFrom)

static bool jsb_spine_TrackEntry_get_next(se::State& s)
{
    spTrackEntry* cobj = (spTrackEntry*) s.nativeThisObject();
    if (cobj->next)
    {
        bool ok = sptrackentry_to_seval(cobj->next, &s.rval());
        SE_PRECONDITION2(ok, false, "Converting track entry failed!");
        return true;
    }
    s.rval().setNull();
    return true;
}
SE_BIND_FUNC(jsb_spine_TrackEntry_get_next)

static bool jsb_spine_TrackEntry_get_trackIndex(se::State& s)
{
    spTrackEntry* cobj = (spTrackEntry*) s.nativeThisObject();
    s.rval().setInt32(cobj->trackIndex);
    return true;
}
SE_BIND_PROP_GET(jsb_spine_TrackEntry_get_trackIndex)

static bool jsb_spine_TrackEntry_get_loop(se::State& s)
{
    spTrackEntry* cobj = (spTrackEntry*) s.nativeThisObject();
    s.rval().setInt32(cobj->loop);
    return true;
}
SE_BIND_PROP_GET(jsb_spine_TrackEntry_get_loop)

static bool jsb_spine_TrackEntry_get_eventThreshold(se::State& s)
{
    spTrackEntry* cobj = (spTrackEntry*) s.nativeThisObject();
    s.rval().setFloat(cobj->eventThreshold);
    return true;
}
SE_BIND_PROP_GET(jsb_spine_TrackEntry_get_eventThreshold)

static bool jsb_spine_TrackEntry_get_attachmentThreshold(se::State& s)
{
    spTrackEntry* cobj = (spTrackEntry*) s.nativeThisObject();
    s.rval().setFloat(cobj->attachmentThreshold);
    return true;
}
SE_BIND_PROP_GET(jsb_spine_TrackEntry_get_attachmentThreshold)

static bool jsb_spine_TrackEntry_get_drawOrderThreshold(se::State& s)
{
    spTrackEntry* cobj = (spTrackEntry*) s.nativeThisObject();
    s.rval().setFloat(cobj->drawOrderThreshold);
    return true;
}
SE_BIND_PROP_GET(jsb_spine_TrackEntry_get_drawOrderThreshold)

static bool jsb_spine_TrackEntry_get_animationStart(se::State& s)
{
    spTrackEntry* cobj = (spTrackEntry*) s.nativeThisObject();
    s.rval().setFloat(cobj->animationStart);
    return true;
}
SE_BIND_PROP_GET(jsb_spine_TrackEntry_get_animationStart)

static bool jsb_spine_TrackEntry_get_animationEnd(se::State& s)
{
    spTrackEntry* cobj = (spTrackEntry*) s.nativeThisObject();
    s.rval().setFloat(cobj->animationEnd);
    return true;
}
SE_BIND_PROP_GET(jsb_spine_TrackEntry_get_animationEnd)

static bool jsb_spine_TrackEntry_get_animationLast(se::State& s)
{
    spTrackEntry* cobj = (spTrackEntry*) s.nativeThisObject();
    s.rval().setFloat(cobj->animationLast);
    return true;
}
SE_BIND_PROP_GET(jsb_spine_TrackEntry_get_animationLast)

static bool jsb_spine_TrackEntry_get_nextAnimationLast(se::State& s)
{
    spTrackEntry* cobj = (spTrackEntry*) s.nativeThisObject();
    s.rval().setFloat(cobj->nextAnimationLast);
    return true;
}
SE_BIND_PROP_GET(jsb_spine_TrackEntry_get_nextAnimationLast)

static bool jsb_spine_TrackEntry_get_delay(se::State& s)
{
    spTrackEntry* cobj = (spTrackEntry*) s.nativeThisObject();
    s.rval().setFloat(cobj->delay);
    return true;
}
SE_BIND_PROP_GET(jsb_spine_TrackEntry_get_delay)

static bool jsb_spine_TrackEntry_get_trackTime(se::State& s)
{
    spTrackEntry* cobj = (spTrackEntry*) s.nativeThisObject();
    s.rval().setFloat(cobj->trackTime);
    return true;
}
SE_BIND_PROP_GET(jsb_spine_TrackEntry_get_trackTime)

static bool jsb_spine_TrackEntry_get_trackLast(se::State& s)
{
    spTrackEntry* cobj = (spTrackEntry*) s.nativeThisObject();
    s.rval().setFloat(cobj->trackLast);
    return true;
}
SE_BIND_PROP_GET(jsb_spine_TrackEntry_get_trackLast)

static bool jsb_spine_TrackEntry_get_nextTrackLast(se::State& s)
{
    spTrackEntry* cobj = (spTrackEntry*) s.nativeThisObject();
    s.rval().setFloat(cobj->nextTrackLast);
    return true;
}
SE_BIND_PROP_GET(jsb_spine_TrackEntry_get_nextTrackLast)

static bool jsb_spine_TrackEntry_get_trackEnd(se::State& s)
{
    spTrackEntry* cobj = (spTrackEntry*) s.nativeThisObject();
    s.rval().setFloat(cobj->trackEnd);
    return true;
}
SE_BIND_PROP_GET(jsb_spine_TrackEntry_get_trackEnd)

static bool jsb_spine_TrackEntry_get_timeScale(se::State& s)
{
    spTrackEntry* cobj = (spTrackEntry*) s.nativeThisObject();
    s.rval().setFloat(cobj->timeScale);
    return true;
}
SE_BIND_PROP_GET(jsb_spine_TrackEntry_get_timeScale)

static bool jsb_spine_TrackEntry_get_alpha(se::State& s)
{
    spTrackEntry* cobj = (spTrackEntry*) s.nativeThisObject();
    s.rval().setFloat(cobj->alpha);
    return true;
}
SE_BIND_PROP_GET(jsb_spine_TrackEntry_get_alpha)

static bool jsb_spine_TrackEntry_get_mixTime(se::State& s)
{
    spTrackEntry* cobj = (spTrackEntry*) s.nativeThisObject();
    s.rval().setFloat(cobj->mixTime);
    return true;
}
SE_BIND_PROP_GET(jsb_spine_TrackEntry_get_mixTime)

static bool jsb_spine_TrackEntry_get_mixDuration(se::State& s)
{
    spTrackEntry* cobj = (spTrackEntry*) s.nativeThisObject();
    s.rval().setFloat(cobj->mixDuration);
    return true;
}
SE_BIND_PROP_GET(jsb_spine_TrackEntry_get_mixDuration)

static bool jsb_spine_TrackEntry_get_mixAlpha(se::State& s)
{
    spTrackEntry* cobj = (spTrackEntry*) s.nativeThisObject();
    s.rval().setFloat(cobj->mixAlpha);
    return true;
}
SE_BIND_PROP_GET(jsb_spine_TrackEntry_get_mixAlpha)

static bool jsb_spine_TrackEntry_get_timelinesFirstCount(se::State& s)
{
    spTrackEntry* cobj = (spTrackEntry*) s.nativeThisObject();
    s.rval().setInt32(cobj->timelinesFirstCount);
    return true;
}
SE_BIND_PROP_GET(jsb_spine_TrackEntry_get_timelinesFirstCount)

static bool jsb_spine_TrackEntry_get_timelinesRotationCount(se::State& s)
{
    spTrackEntry* cobj = (spTrackEntry*) s.nativeThisObject();
    s.rval().setInt32(cobj->timelinesRotationCount);
    return true;
}
SE_BIND_PROP_GET(jsb_spine_TrackEntry_get_timelinesRotationCount)

static bool jsb_spine_TrackEntry_get_animation(se::State& s)
{
    spTrackEntry* cobj = (spTrackEntry*) s.nativeThisObject();

    SE_PRECONDITION2(spanimation_to_seval(cobj->animation, &s.rval()), false, "Converting spAnimation failed!");
    return true;
}
SE_BIND_PROP_GET(jsb_spine_TrackEntry_get_animation)

static bool js_register_spine_TrackEntry(se::Object* obj)
{
    se::Class* cls = se::Class::create("TrackEntry", obj, nullptr, _SE(jsb_spine_TrackEntry_constructor));
    cls->defineFunction("mixingFrom", _SE(jsb_spine_TrackEntry_get_mixingFrom));
    cls->defineFunction("next", _SE(jsb_spine_TrackEntry_get_next));

    cls->defineProperty("delay", _SE(jsb_spine_TrackEntry_get_delay), nullptr);
    cls->defineProperty("trackIndex", _SE(jsb_spine_TrackEntry_get_trackIndex), nullptr);
    cls->defineProperty("loop", _SE(jsb_spine_TrackEntry_get_loop), nullptr);
    cls->defineProperty("eventThreshold", _SE(jsb_spine_TrackEntry_get_eventThreshold), nullptr);
    cls->defineProperty("attachmentThreshold", _SE(jsb_spine_TrackEntry_get_attachmentThreshold), nullptr);
    cls->defineProperty("drawOrderThreshold", _SE(jsb_spine_TrackEntry_get_drawOrderThreshold), nullptr);
    cls->defineProperty("animationStart", _SE(jsb_spine_TrackEntry_get_animationStart), nullptr);
    cls->defineProperty("animationEnd", _SE(jsb_spine_TrackEntry_get_animationEnd), nullptr);
    cls->defineProperty("animationLast", _SE(jsb_spine_TrackEntry_get_animationLast), nullptr);
    cls->defineProperty("nextAnimationLast", _SE(jsb_spine_TrackEntry_get_nextAnimationLast), nullptr);
    cls->defineProperty("trackTime", _SE(jsb_spine_TrackEntry_get_trackTime), nullptr);
    cls->defineProperty("trackLast", _SE(jsb_spine_TrackEntry_get_trackLast), nullptr);
    cls->defineProperty("nextTrackLast", _SE(jsb_spine_TrackEntry_get_nextTrackLast), nullptr);
    cls->defineProperty("trackEnd", _SE(jsb_spine_TrackEntry_get_trackEnd), nullptr);
    cls->defineProperty("timeScale", _SE(jsb_spine_TrackEntry_get_timeScale), nullptr);
    cls->defineProperty("alpha", _SE(jsb_spine_TrackEntry_get_alpha), nullptr);
    cls->defineProperty("mixTime", _SE(jsb_spine_TrackEntry_get_mixTime), nullptr);
    cls->defineProperty("mixDuration", _SE(jsb_spine_TrackEntry_get_mixDuration), nullptr);
    cls->defineProperty("mixAlpha", _SE(jsb_spine_TrackEntry_get_mixAlpha), nullptr);
    cls->defineProperty("timelinesFirstCount", _SE(jsb_spine_TrackEntry_get_timelinesFirstCount), nullptr);
    cls->defineProperty("timelinesRotationCount", _SE(jsb_spine_TrackEntry_get_timelinesRotationCount), nullptr);
    cls->defineProperty("animation", _SE(jsb_spine_TrackEntry_get_animation), nullptr);

    cls->defineFinalizeFunction(_SE(jsb_spine_TrackEntry_finalize));
    cls->install();

    JSBClassType::registerClass<spTrackEntry>(cls);
    __jsb_spine_TrackEntry_class = cls;
    __jsb_spine_TrackEntry_proto = cls->getProto();

    spTrackEntry_setDisposeCallback([](spTrackEntry* entry){
        se::Object* seObj = nullptr;

        auto iter = se::NativePtrToObjectMap::find(entry);
        if (iter != se::NativePtrToObjectMap::end())
        {
            // Save se::Object pointer for being used in cleanup method.
            seObj = iter->second;
            // Unmap native and js object since native object was destroyed.
            // Otherwise, it may trigger 'assertion' in se::Object::setPrivateData later
            // since native obj is already released and the new native object may be assigned with
            // the same address.
            se::NativePtrToObjectMap::erase(iter);
        }
        else
        {
            return;
        }

        auto cleanup = [seObj](){

            auto se = se::ScriptEngine::getInstance();
            if (!se->isValid() || se->isInCleanup())
                return;

            se::AutoHandleScope hs;
            se->clearException();

            // The native <-> JS mapping was cleared in the callback above.
            // seObj->clearPrivateData isn't needed since the JS object will be garbage collected after unroot and decRef.
            seObj->unroot();
            seObj->decRef();
        };

        if (!se::ScriptEngine::getInstance()->isGarbageCollecting())
        {
            cleanup();
        }
        else
        {
            CleanupTask::pushTaskToAutoReleasePool(cleanup);
        }
    });

    se::ScriptEngine::getInstance()->clearException();
    return true;
}

bool register_all_spine_manual(se::Object* obj)
{
    js_register_spine_TrackEntry(obj);
    return true;
}
