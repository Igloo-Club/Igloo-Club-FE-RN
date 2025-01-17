import React, {useCallback, useState} from 'react';
import RangeSliderRN from 'rn-range-slider';
import {View, Text} from 'react-native';

import Label from './Label.tsx';
import Notch from './Notch.tsx';
import Rail from './Rail.tsx';
import RailSelected from './RailSeleted.tsx';
import Thumb from './Thumb.tsx';

const RangeSlider = ({
  start,
  end,
  from,
  to,
  onValueChange,
}: {
  start: number;
  end: number;
  from: number | undefined | null;
  to: number | undefined | null;
  onValueChange: (newValue: number[]) => void;
}) => {
  const [low, setLow] = useState(from);
  const [high, setHigh] = useState(to);

  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(
    (value: number) => <Label text={value} />,
    [],
  );
  const renderNotch = useCallback(() => <Notch />, []);

  const handleValueChange = useCallback(
    (newLow: number, newHigh: number) => {
      setLow(newLow);
      setHigh(newHigh);
      onValueChange([newLow, newHigh]);
    },
    [onValueChange],
  );

  return (
    <>
      <RangeSliderRN
        min={start}
        max={end}
        low={low || 0}
        high={high || 0}
        step={1}
        floatingLabel
        renderThumb={renderThumb}
        renderRail={renderRail}
        renderRailSelected={renderRailSelected}
        renderLabel={renderLabel}
        renderNotch={renderNotch}
        onValueChanged={handleValueChange}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
        }}>
        <View>
          <Text style={[{fontSize: 13, color: '#646D7A'}]}>{start}</Text>
        </View>
        <View>
          <Text style={[{fontSize: 13, color: '#646D7A'}]}>{end}+</Text>
        </View>
      </View>
    </>
  );
};

export default RangeSlider;
