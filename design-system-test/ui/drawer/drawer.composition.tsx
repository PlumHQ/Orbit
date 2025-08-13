import React from 'react';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerTrigger, DrawerClose } from './component';
import { Button } from '@pluminsurance/design-system-test.button';
import { DownloadIcon } from '@pluminsurance/design-system-test.icons';
// import { BarChart, Bar, ResponsiveContainer } from 'recharts';
const data = [
    {
        goal: 400,
    },
    {
        goal: 300,
    },
    {
        goal: 200,
    },
    {
        goal: 300,
    },
    {
        goal: 200,
    },
    {
        goal: 278,
    },
    {
        goal: 189,
    },
    {
        goal: 239,
    },
    {
        goal: 300,
    },
    {
        goal: 200,
    },
    {
        goal: 278,
    },
    {
        goal: 189,
    },
    {
        goal: 349,
    },
]
export function DrawerDemo() {
    const [goal, setGoal] = React.useState(350)
    function onClick(adjustment: number) {
        setGoal(Math.max(200, Math.min(400, goal + adjustment)))
    }
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <Button
                    variant="secondary"
                    styleVariant="primary"
                    size="small"
                    label="Open Drawer"
                    leadingIcon={DownloadIcon}
                />
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                        <DrawerTitle>Move Goal</DrawerTitle>
                        <DrawerDescription>Set your daily activity goal.</DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4 pb-0">
                        <div className="flex items-center justify-center space-x-2">
                            <Button
                                variant="secondary"
                                styleVariant="primary"
                                size="small"
                                onClick={() => onClick(-10)}
                                disabled={goal <= 200}
                                leadingIcon={DownloadIcon}
                                label="Decrease"
                            />
                            <div className="flex-1 text-center">
                                <div className="text-7xl font-bold tracking-tighter">
                                    {goal}
                                </div>
                                <div className="text-muted-foreground text-[0.70rem] uppercase">
                                    Calories/day
                                </div>
                            </div>
                            <Button
                                variant="secondary"   
                                styleVariant="primary"
                                size="small"
                                onClick={() => onClick(10)}
                                disabled={goal >= 400}
                                leadingIcon={DownloadIcon}
                                label="Increase"
                            />
                        </div>
                        {/* <div className="mt-3 h-[120px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <Bar
                      dataKey="goal"
                      style={
                        {
                          fill: "hsl(var(--foreground))",
                          opacity: 0.9,
                        } as React.CSSProperties
                      }
                    />
                  </BarChart>
                </ResponsiveContainer> */}
                    </div>
                </div>
                <DrawerFooter>
                    <Button
                    styleVariant="primary"
                    variant="secondary"
                    size="small"
                    label="Submit"
                    />
                    <DrawerClose asChild>
                        <Button 
                        styleVariant="primary"
                        variant="secondary"
                        size="small"
                        label="Cancel"
                        />
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
      </Drawer >
    )
}
