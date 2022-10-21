/*
 * @Author: Dihan Li lidihan@hyperchain.cn
 * @Date: 2022-10-21 17:36:30
 * @LastEditors: Dihan Li lidihan@hyperchain.cn
 * @LastEditTime: 2022-10-21 17:37:00
 * @FilePath: /bookcase-web/src/components/test/test2.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";

export default () => (
  <>
    {/* animate individual element. */}
    <Animate play start={{ opacity: 0 }} end={{ opacity: 1 }}>
      <h1>React simple animate</h1>
    </Animate>
    
    {/* animate keyframes with individual element. */}
    <AnimateKeyframes
      play
      iterationCount="infinite"
      keyframes={["opacity: 0", "opacity: 1"]}
    >
      <h1>React simple animate with keyframes</h1>
    </AnimateKeyframes>
    
    {/* animate group of animation in sequences */}
    <AnimateGroup play>
      <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={0}>
        first
      </Animate>
      <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={1}>
        second
      </Animate>
      <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={2}>
        third
      </Animate>
    </AnimateGroup>
  </>
);
