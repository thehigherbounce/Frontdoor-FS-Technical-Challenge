export interface Summary {
    id: string;
    text: string;
    highlightId: string;
    createdAt: string;
}
export interface SummaryTooltipProps {
    summary: string;
    targetRef: React.RefObject<HTMLElement>;
    x: number | null,
    y: number | null,
}