// type it because we will manipulate it.
//
type data = string | string[];
type dataArray = Array<data | data[]>; // also (data | data[])[]
//
// if the types were any more specific we couldn't manipulate the data.
// that was obnoxious. moving on...
//