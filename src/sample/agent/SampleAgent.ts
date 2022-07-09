import {Sample} from 'src/sample/model/Sample';

type SamplesResponse = {
    data: {
        list: Sample[],
        totalRow: number
    };
    resultCode: string;
}

export class SampleAgent {

  public static async fetchSamples(page: number, pageSize: number, query?: string): Promise<SamplesResponse> {
    return {
      data: {
        list: [new Sample('A'), new Sample('B'), new Sample('C'), new Sample('D'), new Sample('E'), new Sample('F'), new Sample('G'), new Sample('H'), new Sample('I'), new Sample('J')],
        totalRow: 100
      },
      resultCode: ''
    };
  }
}