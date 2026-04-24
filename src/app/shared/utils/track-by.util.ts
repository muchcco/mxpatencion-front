export class TrackByUtil {
  public static index(index: number): number {
    return index;
  }

  public static id<T extends { id?: number | string | null }>(
    index: number,
    item: T
  ): number | string {
    return item.id ?? index;
  }
}
