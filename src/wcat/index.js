import { validateCase } from './schema.js'
import casewcat200406686 from './cases/wcat-2004-06686.js'
import casewcat200405173 from './cases/wcat-2004-05173.js'
import casewcat200404737 from './cases/wcat-2004-04737.js'
import casewcat200300254 from './cases/wcat-2003-00254.js'
import casewcat200702958 from './cases/wcat-2007-02958.js'
import casewcat200601779 from './cases/wcat-2006-01779.js'
import casewcat200402912 from './cases/wcat-2004-02912.js'
import casewcata2101129 from './cases/wcat-a2101129.js'
import casewcat201101618 from './cases/wcat-2011-01618.js'
import casewcata1900037 from './cases/wcat-a1900037.js'
import casewcat201501712 from './cases/wcat-2015-01712.js'
import casewcat201402791 from './cases/wcat-2014-02791.js'
import casewcat201401272 from './cases/wcat-2014-01272.js'
import casewcat201401368 from './cases/wcat-2014-01368.js'
import casewcata1701687 from './cases/wcat-a1701687.js'
import casewcat200700430 from './cases/wcat-2007-00430.js'
import casewcat200700798 from './cases/wcat-2007-00798.js'
import casewcat200900149 from './cases/wcat-2009-00149.js'
import casewcat200803461200803567 from './cases/wcat-2008-03461-2008-03567.js'
import casewcat200406708200403907 from './cases/wcat-2004-06708-2004-03907.js'
import casewcat200602121200602669 from './cases/wcat-2006-02121-2006-02669.js'
import casewcat200403983 from './cases/wcat-2004-03983.js'
import casewcat200403709 from './cases/wcat-2004-03709.js'
import casewcat200603608 from './cases/wcat-2006-03608.js'
import casewcat200406682 from './cases/wcat-2004-06682.js'
import casewcat200406831 from './cases/wcat-2004-06831.js'
import casewcat200404921200404632 from './cases/wcat-2004-04921-2004-04632.js'
import casewcat200501035 from './cases/wcat-2005-01035.js'
import casewcat200702634 from './cases/wcat-2007-02634.js'
import casewcata1601379 from './cases/wcat-a1601379.js'
import casewcat200602659 from './cases/wcat-2006-02659.js'

const wcatCases = [casewcat200406686, casewcat200405173, casewcat200404737, casewcat200300254, casewcat200702958, casewcat200601779, casewcat200402912, casewcata2101129, casewcat201101618, casewcata1900037, casewcat201501712, casewcat201402791, casewcat201401272, casewcat201401368, casewcata1701687, casewcat200700430, casewcat200700798, casewcat200900149, casewcat200803461200803567, casewcat200406708200403907, casewcat200602121200602669, casewcat200403983, casewcat200403709, casewcat200603608, casewcat200406682, casewcat200406831, casewcat200404921200404632, casewcat200501035, casewcat200702634, casewcata1601379, casewcat200602659]

wcatCases.forEach(validateCase)

export default wcatCases
export { wcatCases }
