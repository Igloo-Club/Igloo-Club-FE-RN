import {useState} from 'react';

const useSelectOptions = (initialOptions: string[] = []) => {
  const [selectedOptions, setSelectedOptions] =
    useState<string[]>(initialOptions);

  const handleSelect = (option: string | number) => {
    if (typeof option === 'string') {
      setSelectedOptions(prevOptions =>
        prevOptions.includes(option)
          ? prevOptions.filter(item => item !== option)
          : [...prevOptions, option],
      );
    }
  };

  return {
    selectedOptions,
    handleSelect,
  };
};

export default useSelectOptions;
