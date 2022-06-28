import capitalizeString from '../modules/capitalize';

test ('capitalizing', () => {
    expect(capitalizeString('odin project')).toBe('Odin project');
  });